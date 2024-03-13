"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = exports.EmailConfigs = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.EmailConfigs = __importStar(require("./configs"));
class Email {
    constructor({ username, password }, configs) {
        this.username = username;
        this.password = password;
        this.configs = configs;
    }
    setCredentials({ username, password }) {
        this.username = username;
        this.password = password;
    }
    setConfigurations(configs) {
        this.configs = configs;
    }
    sendEmail(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.username || !this.password) {
                throw new Error('Email Credentials Not Set');
            }
            if (!this.configs) {
                throw new Error('Email Configurations Not Set');
            }
            let transporter = nodemailer_1.default.createTransport(this.configs);
            let verified = yield transporter.verify();
            if (!verified) {
                throw new Error('Mailer Not Verified');
            }
            let transportResponse = yield transporter.sendMail(payload);
            return transportResponse;
        });
    }
}
exports.Email = Email;
//# sourceMappingURL=index.js.map