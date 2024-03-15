import nodemailer from 'nodemailer'

export const buildBasicConfigs = ({ host, port, username, password }: { host: string, port?: number, username: string, password: string }, configs?: nodemailer.TransportOptions) => {
    return {
        ...BASE_CONFIGS,
        host,
        port,
        auth: {
            user: username,
            pass: password
        },
        ...configs
    }
}

export const BASE_CONFIGS = {
    secure: true,
    tls: {
        rejectUnauthorized: true
    }
}

