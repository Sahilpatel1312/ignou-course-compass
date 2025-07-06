
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  console.log("Counselling form function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    console.log("Received form data:", formData);

    // Google Apps Script web app URL - Updated with your provided URL
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzyE7DQNoU1QbOw9hKEfPcy9T-B3ab8WxcvhUJixQhR705bpcKcj8KS1REyZU8NqclIRg/exec";

    // Prepare data in a format that Google Apps Script expects
    const googleSheetData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      state: formData.location || formData.state,
      interestedCourse: formData.interestedCourse,
      timestamp: formData.timestamp || new Date().toISOString(),
    };

    console.log("Sending data to Google Apps Script:", googleSheetData);

    // Send data to Google Apps Script with proper headers and error handling
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(googleSheetData),
      // Add redirect handling for Google Apps Script
      redirect: 'follow'
    });

    console.log("Google Apps Script response status:", response.status);
    console.log("Google Apps Script response headers:", Object.fromEntries(response.headers.entries()));
    
    let result;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      result = await response.text();
    }
    
    console.log("Google Apps Script result:", result);

    // Check if the response indicates success (Google Apps Script often returns 200 even for redirects)
    if (response.status >= 200 && response.status < 400) {
      // Also store in Supabase for backup
      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      console.log("Storing backup in Supabase...");
      const { error: supabaseError } = await supabase
        .from('counselling_submissions')
        .insert({
          form_data: formData,
          timestamp: formData.timestamp || new Date().toISOString(),
          processed: false
        });

      if (supabaseError) {
        console.error("Supabase storage error:", supabaseError);
        // Don't throw here, as the main Google Sheets submission succeeded
      } else {
        console.log("Successfully stored backup in Supabase");
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Form submitted successfully to Google Sheets",
          googleResponse: result
        }),
        {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          },
        }
      );
    } else {
      throw new Error(`Google Apps Script returned status ${response.status}: ${result}`);
    }

  } catch (error: any) {
    console.error("Error in counselling-form function:", error);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to submit form to Google Sheets",
        details: error.toString(),
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );
  }
});
