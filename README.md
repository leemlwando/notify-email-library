# notify-email-library

Nodemailer wrapper to conveiently help setup emails.

## Get started

run the following command in your project root directory

```sh
npm i @open-source-initiative/notify-email
```


## Usage

```js
import * as Notify from '@open-source-initiative/notify-email';

const configs = Notify.EmailConfigs.buildBasicConfigs({ username: 'username@mail.com', password: 'xxxxxxxx', host: 'mail.com' }, {/** Valid Nodemailer config options*/ })

const Email = new Notify.Email(configs);

const sendEmail = async () => {

    /**
     * @params { valid nodemailer send options }
    */
    await Email.sendEmail({
        from: `My Company Name <info@mail.com>`,
        to: 'client@mail.com',
        subject: "Test Email",
        html: `<h1>Notify::Email::Hello world</h1>`
    });

}
```



## Support

Email: [leemlwando@gmail.com]
Mobile: +260975247994