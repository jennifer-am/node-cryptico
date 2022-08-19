export function b256to64(t: any): string;
export function b64to256(t: any): string;
export function b16to64(h: any): string;
export function b64to16(s: any): string;
export function string2bytes(string: any): any[];
export function bytes2string(bytes: any): string;
export function blockXOR(a: any, b: any): any[];
export function blockIV(): any[];
export function pad16(bytes: any): any;
export function depad(bytes: any): any;
export function encryptAESCBC(plaintext: any, key: any): string;
export function decryptAESCBC(encryptedText: any, key: any): string;
export function wrap60(string: any): string;
export function generateAESKey(): any[];
export function generateRSAKey(passphrase: any, bitlength: any): rsa.RSAKey;
export function publicKeyString(rsakey: any): any;
export function publicKeyID(publicKeyString: any): string;
export function publicKeyFromString(string: any): rsa.RSAKey;
export function encrypt(plaintext: any, publickeystring: any, signingkey: any): {
    status: string;
    cipher?: undefined;
} | {
    status: string;
    cipher: string;
};
export function decrypt(ciphertext: any, key: any): {
    status: string;
    plaintext?: undefined;
    signature?: undefined;
    publicKeyString?: undefined;
} | {
    status: string;
    plaintext: string;
    signature: string;
    publicKeyString: any;
} | {
    status: string;
    plaintext: string;
    signature: string;
    publicKeyString?: undefined;
};
import rsa = require("./lib/rsa");
