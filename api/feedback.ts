/* eslint-disable */
import { VercelRequest, VercelResponse } from '@vercel/node'
import { FeedbackDto } from '~/dto/feedback.dto'
import * as nodemailer from 'nodemailer'

export default async (request: VercelRequest, response: VercelResponse) => {
  const feedback: FeedbackDto = request.body

  console.log(feedback);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email_user,
      pass: process.env.email_password
    }
  });
  console.log(process.env.email_user)

  const mailOptions = {
    from: process.env.email_user,
    to:  process.env.email_target,
    subject: 'Startup Gamification - Neues Feedback',
    text: JSON.stringify(feedback)
  }

  await new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error: Error | null, info: any) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
      resolve(true)
    });
  })

  response.send(200)
}
