import nodemailer from 'nodemailer';
export * as EmailConfigs from './configs';
export declare class Email {
    private configs;
    constructor(configs: nodemailer.TransportOptions);
    setConfigurations(configs: any): void;
    sendEmail(payload: nodemailer.SendMailOptions): Promise<unknown>;
}
//# sourceMappingURL=index.d.ts.map