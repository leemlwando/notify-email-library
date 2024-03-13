import nodemailer from 'nodemailer';

export * as EmailConfigs from './configs';

export class Email {

    private configs: nodemailer.TransportOptions;
    private username: string;
    private password: string;

    constructor({username, password}: {username: string, password: string}, configs: nodemailer.TransportOptions){
        this.username = username;
        this.password = password;
        this.configs = configs;
    }

    public setCredentials({username, password}: {username: string; password: string}){
        this.username = username;
        this.password = password;
    }

    public setConfigurations(configs: any){
        this.configs = configs;
    }

    public async sendEmail(payload: nodemailer.SendMailOptions){

        if(!this.username || !this.password){
            throw new Error('Email Credentials Not Set');
        }

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