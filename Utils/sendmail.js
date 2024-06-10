'use server'
import nodemailer from 'nodemailer'

export const sendmail=async (prevState,formData)=>{
const name = await formData.get('name')
const email =await formData.get('email')
const phone =await formData.get('number')
const subject =await formData.get('subject')
const message =await formData.get('message')

 // Email options
 const mailOptions = {
    from: email,
    to: email, // replace with your email address
    subject: `${subject}`,
    text: `You have a new message from ${name} (${email}, ${phone}):
    
    ${message}`,
  };

 
  // Send email
  try {

   // Set up nodemailer transporter
   const transporter = nodemailer.createTransport({
    service: 'gmail', // you can use other email services
    host:'smtp.google.com',
    port: 587,
secure:false,
    auth: {
        user: process.env.OWNER_EMAIL,
        pass: process.env.OWNER_PASSWORD
    },
  });

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent',info.response)
return {
    message:'Email sent successfully'
}
  } catch (error) {
    console.log('Error',error)
  return {
    
    message:`Error sending message ${error}` 
  }
  }

}