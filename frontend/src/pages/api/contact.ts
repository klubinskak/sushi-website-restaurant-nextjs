import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../../config/nodemailer';
import { Options } from "nodemailer/lib/mailer";

var hbs = require('nodemailer-express-handlebars');

const path = require ("path");

type ExtendedOptions = Options & { template: string, context: Record<string, unknown> };


const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('src/lib'),
    defaultLayout: false,
  },
  viewPath: path.resolve('src/lib'),
  extName: ".handlebars"
}

transporter.use('compile', hbs(handlebarOptions));

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST") {
    const data = req.body;
    if(!data || !data.name || !data.email || !data.subject || !data.message){
      return res.status(400).send({message: "Bad request"});
    }

    try{
      const options: ExtendedOptions = {
        from: data.email,
        to: process.env.EMAIL,
        subject: data.subject,
        template: 'email',
        context: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        },
        // html: `<h1>Message from: ${data.name}</h1><p>${data.message}</p>`
      }
      await transporter.sendMail(options)
    }catch(error: any ) {
      console.log(error);
      return res.status(400).json({ message: error.message })
    }


  }

  return res.status(400).json({message: "Bad request"})
}