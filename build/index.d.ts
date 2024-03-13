import nodemailer from 'nodemailer';
export * as EmailConfigs from './configs';
export declare class Email {
    private configs;
    private username;
    private password;
    constructor({ username, password }: {
        username: string;
        password: string;
    }, configs: nodemailer.TransportOptions);
    setCredentials({ username, password }: {
        username: string;
        password: string;
    }): void;
    setConfigurations(configs: any): void;
    sendEmail(payload: nodemailer.SendMailOptions): Promise<unknown>;
}
//# sourceMappingURL=index.d.ts.map