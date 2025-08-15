// Template function that generates the HTML
function generateEmailHTML(data) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta property="og:title" content="Email Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="referrer" content="origin">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Email Template</title>
    <style>
        img{-ms-interpolation-mode:bicubic;}
        table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
        .mceStandardButton, .mceStandardButton td, .mceStandardButton td a{mso-hide:all !important;}
        p, a, li, td, blockquote{mso-line-height-rule:exactly;}
        p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}
        @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;}
        }
        .mcnPreviewText{display: none !important;}
        .bodyCell{margin:0 auto; padding:0; width:100%;}
        .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;}
        .ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
        a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;}
        body{
            height:100%;
            margin:0;
            padding:0;
            width:100%;
            background: ${data.backgroundColor};
        }
        #bodyTable {
            background: url('${data.headerImage}') repeat;
            background-size: auto;
        }
        h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;}
        img, a img{border:0; height:auto; outline:none; text-decoration:none;}
    </style>
</head>
<body style="height:100%; margin:0; padding:0; width:100%; background:${data.backgroundColor};">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" id="bodyTable">
        <tbody>
            <tr>
                <td align="center" valign="top" class="bodyCell">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                        
                        ${data.includeHeader ? `
                        <!-- Header -->
                        <tr>
                            <td style="padding:40px 20px; text-align:center;">
                                ${data.logoImage ? `<img src="${data.logoImage}" alt="Logo" style="max-width:200px; height:auto;">` : ''}
                            </td>
                        </tr>
                        ` : ''}
                        
                        <!-- Content -->
                        <tr>
                            <td style="padding:30px 20px; background:white; border-radius:8px; margin:20px;">
                                
                                ${data.includeGreeting ? `
                                <p style="font-size:16px; line-height:1.6; color:#333; margin-bottom:20px;">
                                    Dear ${data.firstName},
                                </p>
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:30px;">
                                    ${data.greetingText}
                                </p>
                                ` : ''}
                                
                                ${data.includeMainEvent ? `
                                <!-- Main Event -->
                                <h2 style="font-size:32px; margin-top:20px; color:${data.primaryColor}; text-align:left;">
                                    ★ ${data.eventTitle}
                                </h2>
                                
                                ${data.eventImage ? `<img src="${data.eventImage}" alt="Event" style="width:100%; max-width:560px; height:auto; margin:20px 0;">` : ''}
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:20px;">
                                    ${data.eventDescription}
                                </p>
                                
                                <div style="background:#f8f8f8; padding:20px; margin:20px 0; border-radius:8px;">
                                    <p style="font-size:18px; font-weight:bold; color:${data.primaryColor}; margin-bottom:15px;">
                                        📅 Event Details:
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Date:</strong> ${data.eventDate}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Time:</strong> ${data.eventTime}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Location:</strong> ${data.eventLocation}
                                    </p>
                                </div>
                                
                                <h3 style="font-size:24px; color:${data.primaryColor}; margin:30px 0 15px 0;">
                                    What to Expect:
                                </h3>
                                
                                <ul style="font-size:16px; line-height:1.8; color:#666; padding-left:20px; margin-bottom:40px;">
                                    <li>${data.activity1}</li>
                                    <li>${data.activity2}</li>
                                    <li>${data.activity3}</li>
                                    <li>${data.activity4}</li>
                                </ul>
                                ` : ''}
                                
                                ${data.includeEvent1 ? `
                                <!-- Additional Event 1 -->
                                <h2 style="font-size:28px; color:${data.secondaryColor}; margin:40px 0 20px 0;">
                                    ★ ${data.event1Title}
                                </h2>
                                
                                ${data.event1Image ? `<img src="${data.event1Image}" alt="Event 1" style="width:100%; max-width:560px; height:auto; margin:20px 0;">` : ''}
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:20px;">
                                    ${data.event1Description}
                                </p>
                                
                                <div style="background:#f8f8f8; padding:20px; margin:20px 0; border-radius:8px;">
                                    <p style="font-size:18px; font-weight:bold; color:${data.secondaryColor}; margin-bottom:15px;">
                                        📅 Event Details:
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Date:</strong> ${data.event1Date}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Time:</strong> ${data.event1Time}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Location:</strong> ${data.event1Location}
                                    </p>
                                </div>
                                
                                <h3 style="font-size:20px; color:${data.secondaryColor}; margin:25px 0 15px 0;">
                                    What to Expect:
                                </h3>
                                
                                <ul style="font-size:16px; line-height:1.8; color:#666; padding-left:20px; margin-bottom:40px;">
                                    <li>${data.event1Activity1}</li>
                                    <li>${data.event1Activity2}</li>
                                    <li>${data.event1Activity3}</li>
                                    <li>${data.event1Activity4}</li>
                                </ul>
                                ` : ''}
                                
                                ${data.includeEvent2 ? `
                                <!-- Additional Event 2 -->
                                <h2 style="font-size:28px; color:${data.secondaryColor}; margin:40px 0 20px 0;">
                                    ★ ${data.event2Title}
                                </h2>
                                
                                ${data.event2Image ? `<img src="${data.event2Image}" alt="Event 2" style="width:100%; max-width:560px; height:auto; margin:20px 0;">` : ''}
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:20px;">
                                    ${data.event2Description}
                                </p>
                                
                                <div style="background:#f8f8f8; padding:20px; margin:20px 0; border-radius:8px;">
                                    <p style="font-size:18px; font-weight:bold; color:${data.secondaryColor}; margin-bottom:15px;">
                                        📅 Event Details:
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Date:</strong> ${data.event2Date}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Time:</strong> ${data.event2Time}
                                    </p>
                                    <p style="font-size:16px; color:#333; margin:5px 0;">
                                        <strong>Location:</strong> ${data.event2Location}
                                    </p>
                                </div>
                                
                                <h3 style="font-size:20px; color:${data.secondaryColor}; margin:25px 0 15px 0;">
                                    What to Expect:
                                </h3>
                                
                                <ul style="font-size:16px; line-height:1.8; color:#666; padding-left:20px; margin-bottom:40px;">
                                    <li>${data.event2Activity1}</li>
                                    <li>${data.event2Activity2}</li>
                                    <li>${data.event2Activity3}</li>
                                    <li>${data.event2Activity4}</li>
                                </ul>
                                ` : ''}
                                
                                ${data.includeCTA ? `
                                <!-- CTA Button -->
                                <div style="text-align:center; margin:40px 0;">
                                    <a href="${data.ctaLink}" style="background:${data.ctaBackgroundColor}; color:white; padding:15px 30px; text-decoration:none; border-radius:6px; font-size:18px; font-weight:bold; display:inline-block;">
                                        ${data.ctaText}
                                    </a>
                                </div>
                                ` : ''}
                                
                                ${data.includeFooter ? `
                                <p style="font-size:16px; line-height:1.6; color:#666; margin:30px 0 20px 0;">
                                    ${data.footerText}
                                </p>
                                
                                <p style="font-size:16px; line-height:1.6; color:#333; margin:20px 0;">
                                    ${data.signature}
                                </p>
                                
                                <div style="background:#f0f0f0; padding:20px; margin:30px 0; border-radius:8px; text-align:center;">
                                    <p style="font-size:14px; line-height:1.6; color:#666; margin:0;">
                                        ${data.contactInfo}
                                    </p>
                                </div>
                                ` : ''}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;
}

// Collect form data
function collectFormData() {
    return {
        // Toggle states
        includeHeader: document.getElementById('includeHeader').checked,
        includeGreeting: document.getElementById('includeGreeting').checked,
        includeMainEvent: document.getElementById('includeMainEvent').checked,
        includeEvent1: document.getElementById('includeEvent1').checked,
        includeEvent2: document.getElementById('includeEvent2').checked,
        includeCTA: document.getElementById('includeCTA').checked,
        includeFooter: document.getElementById('includeFooter').checked,
        
        // Header data
        headerImage: document.getElementById('headerImage').value || 'https://i.postimg.cc/SsDqYMLZ/pexels-photo-756903.png',
        logoImage: document.getElementById('logoImage').value,
        
        // Greeting data
        firstName: document.getElementById('firstName').value,
        greetingText: document.getElementById('greetingText').value,
        
        // Main Event
        eventTitle: document.getElementById('eventTitle').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        eventLocation: document.getElementById('eventLocation').value,
        eventDescription: document.getElementById('eventDescription').value,
        eventImage: document.getElementById('eventImage').value,
        activity1: document.getElementById('activity1').value,
        activity2: document.getElementById('activity2').value,
        activity3: document.getElementById('activity3').value,
        activity4: document.getElementById('activity4').value,
        
        // Additional Event 1
        event1Title: document.getElementById('event1Title').value,
        event1Date: document.getElementById('event1Date').value,
        event1Time: document.getElementById('event1Time').value,
        event1Location: document.getElementById('event1Location').value,
        event1Description: document.getElementById('event1Description').value,
        event1Image: document.getElementById('event1Image').value,
        event1Activity1: document.getElementById('event1Activity1').value,
        event1Activity2: document.getElementById('event1Activity2').value,
        event1Activity3: document.getElementById('event1Activity3').value,
        event1Activity4: document.getElementById('event1Activity4').value,
        
        // Additional Event 2
        event2Title: document.getElementById('event2Title').value,
        event2Date: document.getElementById('event2Date').value,
        event2Time: document.getElementById('event2Time').value,
        event2Location: document.getElementById('event2Location').value,
        event2Description: document.getElementById('event2Description').value,
        event2Image: document.getElementById('event2Image').value,
        event2Activity1: document.getElementById('event2Activity1').value,
        event2Activity2: document.getElementById('event2Activity2').value,
        event2Activity3: document.getElementById('event2Activity3').value,
        event2Activity4: document.getElementById('event2Activity4').value,
        
        // CTA data
        ctaText: document.getElementById('ctaText').value,
        ctaLink: document.getElementById('ctaLink').value,
        ctaBackgroundColor: document.getElementById('ctaBackgroundColor').value,
        
        // Footer data
        footerText: document.getElementById('footerText').value,
        signature: document.getElementById('signature').value,
        contactInfo: document.getElementById('contactInfo').value,
        
        // Colors
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        backgroundColor: document.getElementById('backgroundColor').value
    };
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const previewBtn = document.getElementById('previewBtn');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const copyCodeBtn = document.getElementById('copyCodeBtn');

    previewBtn.addEventListener('click', function() {
        const data = collectFormData();
        const html = generateEmailHTML(data);
        
        const previewFrame = document.getElementById('previewFrame');
        const previewSection = document.getElementById('previewSection');
        
        previewFrame.srcdoc = html;
        previewSection.style.display = 'block';
        previewSection.scrollIntoView({ behavior: 'smooth' });
    });

    generateBtn.addEventListener('click', function() {
        const data = collectFormData();
        const html = generateEmailHTML(data);
        
        const codeSection = document.getElementById('codeSection');
        const generatedCode = document.getElementById('generatedCode');
        
        generatedCode.value = html;
        codeSection.style.display = 'block';
        codeSection.scrollIntoView({ behavior: 'smooth' });
    });

    downloadBtn.addEventListener('click', function() {
        const data = collectFormData();
        const html = generateEmailHTML(data);
        
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'email-template.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    copyCodeBtn.addEventListener('click', function() {
        const generatedCode = document.getElementById('generatedCode');
        generatedCode.select();
        document.execCommand('copy');
        
        copyCodeBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyCodeBtn.textContent = 'Copy Code';
        }, 2000);
    });
});
