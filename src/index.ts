import nodemailer from 'nodemailer';
export * as EmailConfigs from './configs';

export class Email {

    private configs: nodemailer.TransportOptions;

    constructor(configs: nodemailer.TransportOptions){
        this.configs = configs;
    }

    public setConfigurations(configs: any){
        this.configs = configs;
    }

    public async sendEmail(payload: nodemailer.SendMailOptions){

        if(!this.configs){
            throw new Error('Email Configurations Not Set');
        }

        let transporter = nodemailer.createTransport(this.configs);
        let verified = await transporter.verify();

        if(!verified){
            throw new Error('Mailer Not Verified');
        }

        let transportResponse = await  transporter.sendMail(payload);
        return transportResponse;
    }
}