"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_CONFIGS = exports.buildBasicConfigs = void 0;
const buildBasicConfigs = ({ host, port, username, password }, configs) => {
    return Object.assign(Object.assign(Object.assign({}, exports.BASE_CONFIGS), { host,
        port, auth: {
            user: username,
            pass: password
        } }), configs);
};
exports.buildBasicConfigs = buildBasicConfigs;
exports.BASE_CONFIGS = {
    secure: true,
    tls: {
        rejectUnauthorized: true
    }
};
//# sourceMappingURL=configs.js.map