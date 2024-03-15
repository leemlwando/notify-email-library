import nodemailer from 'nodemailer';
export declare const BASE_CONFIGS: {
    secure: boolean;
    tls: {
        rejectUnauthorized: boolean;
    };
};
export declare const buildBasicConfigs: ({ host, port, username, password }: {
    host: string;
    port?: number | undefined;
    username: string;
    password: string;
}, configs?: nodemailer.TransportOptions) => {
    component?: string | undefined;
    host: string;
    port: number | undefined;
    auth: {
        user: string;
        pass: string;
    };
    secure: boolean;
    tls: {
        rejectUnauthorized: boolean;
    };
};
//# sourceMappingURL=configs.d.ts.map