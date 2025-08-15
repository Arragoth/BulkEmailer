// Template function that generates the HTML
function generateEmailHTML(data) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        img{-ms-interpolation-mode:bicubic;}
        table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
        p, a, li, td, blockquote{mso-line-height-rule:exactly;}
        p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;}
        .bodyCell{margin:0 auto; padding:0; width:100%;}
        p{margin:0; padding:0;}
        table{border-collapse:collapse;}
        td, p, a{word-break:break-word;}
        h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;}
        img, a img{border:0; height:auto; outline:none; text-decoration:none;}
    </style>
</head>
<body style="margin:0; padding:0; background:${data.backgroundColor};">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
        <tbody>
            <tr>
                <td align="center" valign="top" class="bodyCell">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                        <!-- Header -->
                        <tr>
                            <td style="background: url('${data.headerImage}') repeat-y; background-size: 100% auto; padding:40px 20px; text-align:center;">
                                ${data.logoImage ? `<img src="${data.logoImage}" alt="Logo" style="max-width:200px; height:auto;">` : ''}
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td style="padding:30px 20px; background:white;">
                                <p style="font-size:16px; line-height:1.6; color:#333; margin-bottom:20px;">
                                    Dear ${data.firstName},
                                </p>
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:30px;">
                                    ${data.greetingText}
                                </p>
                                
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
                                    ${data.activitiesTitle}
                                </h3>
                                
                                <ul style="font-size:16px; line-height:1.8; color:#666; padding-left:20px;">
                                    <li>${data.activity1}</li>
                                    <li>${data.activity2}</li>
                                    <li>${data.activity3}</li>
                                    <li>${data.activity4}</li>
                                </ul>
                                
                                <h2 style="font-size:28px; color:${data.secondaryColor}; margin:40px 0 20px 0;">
                                    ★ ${data.weekendTitle}
                                </h2>
                                
                                ${data.weekendImage ? `<img src="${data.weekendImage}" alt="Weekend Program" style="width:100%; max-width:560px; height:auto; margin:20px 0;">` : ''}
                                
                                <p style="font-size:16px; line-height:1.6; color:#666; margin-bottom:30px;">
                                    ${data.weekendDescription}
                                </p>
                                
                                <!-- CTA Button -->
                                <div style="text-align:center; margin:40px 0;">
                                    <a href="${data.ctaLink}" style="background:${data.ctaBackgroundColor}; color:white; padding:15px 30px; text-decoration:none; border-radius:6px; font-size:18px; font-weight:bold; display:inline-block;">
                                        ${data.ctaText}
                                    </a>
                                </div>
                                
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
        headerImage: document.getElementById('headerImage').value || 'https://i.postimg.cc/SsDqYMLZ/pexels-photo-756903.png',
        logoImage: document.getElementById('logoImage').value,
        firstName: document.getElementById('firstName').value,
        greetingText: document.getElementById('greetingText').value,
        eventTitle: document.getElementById('eventTitle').value,
        eventDate: document.getElementById('eventDate').value,
        eventTime: document.getElementById('eventTime').value,
        eventLocation: document.getElementById('eventLocation').value,
        eventDescription: document.getElementById('eventDescription').value,
        eventImage: document.getElementById('eventImage').value,
        activitiesTitle: document.getElementById('activitiesTitle').value,
        activity1: document.getElementById('activity1').value,
        activity2: document.getElementById('activity2').value,
        activity3: document.getElementById('activity3').value,
        activity4: document.getElementById('activity4').value,
        weekendTitle: document.getElementById('weekendTitle').value,
        weekendDescription: document.getElementById('weekendDescription').value,
        weekendImage: document.getElementById('weekendImage').value,
        ctaText: document.getElementById('ctaText').value,
        ctaLink: document.getElementById('ctaLink').value,
        ctaBackgroundColor: document.getElementById('ctaBackgroundColor').value,
        footerText: document.getElementById('footerText').value,
        signature: document.getElementById('signature').value,
        contactInfo: document.getElementById('contactInfo').value,
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

