import nodemailer from 'nodemailer'

export const BASE_CONFIGS = {
    secure: true,
    tls: {
        rejectUnauthorized: true
    }
}

let officialConfigurations = {
    host: process.env.EMAIL_SERVER,
    // port: 25,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: process.env.SYSTEM_EMAIL_USERNAME,
        pass: process.env.SYSTEM_EMAIL_PASS
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
}


export const buildBasicConfigs = ({ host, port, username, password }: { host: string, port?: number, username: string, password: string }, configs: nodemailer.TransportOptions) => {
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