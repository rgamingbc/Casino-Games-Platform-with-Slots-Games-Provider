# 📧 EmailJS Setup Guide

Follow these steps to enable direct email sending from your contact form to `inforgbc13@gmail.com`.

## 🚀 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 📮 Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or your preferred email provider
4. Follow the setup instructions:
   - For Gmail: You'll need to authenticate with your Google account
   - Note down the **Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Set up your template with these details:

### Template Settings:
- **Template Name**: `Casino Contact Form`
- **Subject**: `{{subject}}`
- **To Email**: `inforgbc13@gmail.com`

### Template Content:
```
New business inquiry from Casino Gaming Platform website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the Casino Gaming Platform contact form.
Reply directly to {{from_email}} to respond to this inquiry.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Your User ID

1. Go to **"Account"** in your EmailJS dashboard
2. Find your **User ID** (Public Key) - it looks like `user_abcdefghijk`

## ⚙️ Step 5: Update Configuration

1. Open `src/config/emailConfig.js` in your project
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const emailConfig = {
  userID: 'user_your_actual_user_id',     // From Step 4
  serviceID: 'service_your_service_id',   // From Step 2
  templateID: 'template_your_template_id' // From Step 3
};
```

## 🧪 Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Navigate to the contact form on your website
3. Fill out and submit a test message
4. Check `inforgbc13@gmail.com` for the email

## 🎯 Expected Result

After setup, when users submit the contact form:
- ✅ Email is sent directly from the website
- ✅ You receive it at `inforgbc13@gmail.com`
- ✅ Users see "Message sent successfully!" 
- ✅ Form resets automatically
- ✅ No email client opens

## 🚨 Troubleshooting

**Error: "EmailJS not configured"**
- Check that all IDs in `emailConfig.js` are updated
- Make sure there are no placeholder values

**Error: "Failed to send message"**
- Verify your EmailJS service is active
- Check that your email template is published
- Ensure your User ID has the correct permissions

**Emails not arriving:**
- Check spam/junk folder
- Verify the "To Email" in your template is correct
- Test with EmailJS dashboard's test feature first

## 💡 Free Plan Limits

EmailJS free plan includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ Unlimited templates

Perfect for a business contact form!

---

**Need Help?** Contact EmailJS support or check their [documentation](https://www.emailjs.com/docs/).
