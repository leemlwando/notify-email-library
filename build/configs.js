"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBasicConfigs = exports.BASE_CONFIGS = void 0;
exports.BASE_CONFIGS = {
    secure: true,
    tls: {
        rejectUnauthorized: true
    }
};
const buildBasicConfigs = ({ host, port, username, password }, configs) => {
    return Object.assign(Object.assign(Object.assign({}, exports.BASE_CONFIGS), { host,
        port, auth: {
            user: username,
            pass: password
        } }), configs);
};
exports.buildBasicConfigs = buildBasicConfigs;
//# sourceMappingURL=configs.js.map