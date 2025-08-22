// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your User ID from the dashboard
// 6. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  // Your EmailJS User ID (Public Key)
  userID: 'YOUR_EMAILJS_USER_ID',
  
  // Your EmailJS Service ID
  serviceID: 'YOUR_SERVICE_ID',
  
  // Your EmailJS Template ID
  templateID: 'YOUR_TEMPLATE_ID'
};

// Email template variables that will be used:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{company}} - Sender's company
// {{message}} - Message content
// {{to_email}} - Your email (inforgbc13@gmail.com)
// {{subject}} - Email subject line

export default emailConfig;
