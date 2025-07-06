// Google Apps Script for IGNOU Course Compass Lead Form
// Sheet ID: 1K2GbYGqV7mjGXt4SQX29S10dvENR9IrAUxkzZQLKSAc

function doPost(e) {
  // Set CORS headers - Allow specific origins
  const allowedOrigins = [
    'http://localhost:8080',
    'https://ignou-course-compass-git-main-sahilpatel1312s-projects.vercel.app'
  ];
  const origin = e.parameter.origin || '*';
  const corsOrigin = allowedOrigins.includes(origin) ? origin : '*';
  const headers = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Origin',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'text/plain'
  };

  try {
    // Parse the incoming form data
    let formData;
    if (e.postData && e.postData.type === 'application/json') {
      // Handle JSON data
      formData = JSON.parse(e.postData.contents);
    } else {
      // Handle form data
      formData = {};
      const params = e.parameter;
      formData.fullName = params.fullName;
      formData.email = params.email;
      formData.phone = params.phone;
      formData.course = params.course;
      formData.state = params.state;
    }

    // Process the form submission
    const result = processFormSubmission(formData);

    // Return response
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);

  } catch (error) {
    // Log the error
    console.error('Error processing form submission:', error);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Failed to process form submission'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function doGet(e) {
  // Set CORS headers - Allow specific origins
  const allowedOrigins = [
    'http://localhost:8080',
    'https://ignou-course-compass-git-main-sahilpatel1312s-projects.vercel.app'
  ];
  const origin = e.parameter.origin || '*';
  const corsOrigin = allowedOrigins.includes(origin) ? origin : '*';
  const headers = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Origin',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json'
  };

  try {
    // Check if this is a form submission via GET (JSONP style)
    if (e.parameter.fullName && e.parameter.email && e.parameter.phone && e.parameter.course && e.parameter.state) {
      // Process form data from GET request
      const formData = {
        fullName: e.parameter.fullName,
        email: e.parameter.email,
        phone: e.parameter.phone,
        course: e.parameter.course,
        state: e.parameter.state
      };

      // Process the form data
      const result = processFormSubmission(formData);

      // Return JSONP response if callback is specified
      if (e.parameter.callback) {
        const jsonpResponse = `${e.parameter.callback}(${JSON.stringify(result)})`;
        return ContentService
          .createTextOutput(jsonpResponse)
          .setMimeType(ContentService.MimeType.JAVASCRIPT)
          .setHeaders(headers);
      }

      // Return regular JSON response
      return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }

    // Handle regular GET requests (for testing)
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'IGNOU Course Compass Lead Form API is running',
        timestamp: new Date().toISOString(),
        instructions: 'Use POST method to submit form data'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);

  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

function doOptions(e) {
  // Handle CORS preflight requests - Allow specific origins
  const allowedOrigins = [
    'http://localhost:8080',
    'https://ignou-course-compass-git-main-sahilpatel1312s-projects.vercel.app'
  ];
  const origin = e.parameter.origin || '*';
  const corsOrigin = allowedOrigins.includes(origin) ? origin : '*';
  const headers = {
    'Access-Control-Allow-Origin': corsOrigin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Origin',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400'
  };

  return ContentService
    .createTextOutput('')
    .setHeaders(headers);
}

function processFormSubmission(formData) {
  console.log('Processing form data:', formData);

  if (!formData.fullName || !formData.email || !formData.phone || !formData.course || !formData.state) {
    return {
      success: false,
      error: 'Missing required fields'
    };
  }

  try {
    const sheetId = '1K2GbYGqV7mjGXt4SQX29S10dvENR9IrAUxkzZQLKSAc';
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Sheet1'); // Sheet1 is your tab name

    const rowData = [
      formData.fullName,           // Full name
      formData.email,              // Email Address
      formData.phone,              // Phone Number
      formData.course,             // Interested Course
      formData.state               // Location (State)
    ];

    sheet.appendRow(rowData);

    const lastRow = sheet.getLastRow();
    console.log('Successfully added lead to row:', lastRow);

    return {
      success: true,
      message: 'Lead submitted successfully',
      rowNumber: lastRow
    };

  } catch (error) {
    console.error('Error in processFormSubmission:', error);
    return {
      success: false,
      error: error.toString(),
      message: 'Failed to process form submission'
    };
  }
}

// Function to set up the sheet headers (run once manually)
function setupSheetHeaders() {
  try {
    const sheetId = '1K2GbYGqV7mjGXt4SQX29S10dvENR9IrAUxkzZQLKSAc';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Define headers
    const headers = [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone Number',
      'Interested Course',
      'State/Location',
      'Status',
      'Source'
    ];
    
    // Clear existing content and set headers
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Auto-resize columns
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    
    console.log('Sheet headers set up successfully');
    
  } catch (error) {
    console.error('Error setting up sheet headers:', error);
  }
}

// Function to test the API (for debugging)
function testAPI() {
  const testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    course: 'Master of Business Administration (MBA)',
    state: 'Delhi'
  };
  
  const payload = JSON.stringify(testData);
  
  // Get the web app URL (you'll need to replace this with your actual URL)
  const webAppUrl = 'YOUR_WEB_APP_URL_HERE';
  
  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload
  };
  
  try {
    const response = UrlFetchApp.fetch(webAppUrl, options);
    console.log('Test response:', response.getContentText());
  } catch (error) {
    console.error('Test failed:', error);
  }
} 