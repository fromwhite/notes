const verifyEndpoint =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const cf_secret = (
  process.env.NODE_ENV == 'development'
    ? process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY_DEV
    : process.env.NODE_ENV === 'production'
    ? process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY
    : ''
) as string

export type cfVerifyType = {
  success: boolean
  message?: string
  data?: any
}

export const cf_verify = async (cf_turnstile: string) => {
  return await fetch(verifyEndpoint, {
    method: 'POST',
    body: `secret=${encodeURIComponent(
      cf_secret
    )}&response=${encodeURIComponent(cf_turnstile)}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
}

import { createTransport, Transporter } from 'nodemailer'
export const sendEmail = async (
  message: string,
  email: string,
  link: string
): Promise<void> => {
  const transporter: Transporter = createTransport({
    service: process.env.EMAIL_AGENT,
    auth: {
      user: process.env.EMAIL_SERVICE,
      pass: process.env.EMAIL_SECRET_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_SERVICE,
    to: email,
    subject: 'Invitation',
    text: `${message}\nCopy the invitation link and open it in the browser:${link}\nOr click the link below`,
    html: `<p>${message}</p><a href="${link}">${link}</a>`,
  }

  return await transporter.sendMail(mailOptions)
}
