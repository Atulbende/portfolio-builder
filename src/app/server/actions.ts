'use server';
import { Resend } from 'resend';

const resend = new Resend('re_6bzoHNUM_JqXUTNK6zsPkcqptEhNu3Qoi');
export const  sendMail= async(formData:FormData )=>{
    const email= formData.get('email') || 'atulbende92@gmail.com';
    const message= formData.get('message');


    const { data, error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [email as string],
        subject: 'Portfolio visitor',
        html: `<strong>${message}</strong>`,
      });
      
      if (error) {
        return console.error({ error });
      }
      return data;
    
     
    
}


(async function () {
  
})();
