
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

    // Google Apps Script web app URL
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzyE7DQNoU1QbOw9hKEfPcy9T-B3ab8WxcvhUJixQhR705bpcKcj8KS1REyZU8NqclIRg/exec";

    // Send data to Google Apps Script
    console.log("Sending data to Google Apps Script...");
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log("Google Apps Script response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Apps Script error:", errorText);
      throw new Error(`Google Apps Script error: ${response.status} - ${errorText}`);
    }

    const result = await response.text();
    console.log("Google Apps Script result:", result);

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
        message: "Form submitted successfully",
        googleResponse: result
      }),
      {
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );

  } catch (error: any) {
    console.error("Error in counselling-form function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to submit form",
        details: error.toString()
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
