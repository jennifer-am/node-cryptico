export function RSAKey(): void;
export class RSAKey {
    n: any;
    e: number;
    d: any;
    p: any;
    q: any;
    dmp1: any;
    dmq1: any;
    coeff: any;
    doPublic: typeof RSADoPublic;
    setPublic: typeof RSASetPublic;
    encrypt: typeof RSAEncrypt;
    doPrivate: typeof RSADoPrivate;
    setPrivate: typeof RSASetPrivate;
    setPrivateEx: typeof RSASetPrivateEx;
    generate: typeof RSAGenerate;
    decrypt: typeof RSADecrypt;
    signString: typeof _rsasign_signString;
    signStringWithSHA1: typeof _rsasign_signStringWithSHA1;
    signStringWithSHA256: typeof _rsasign_signStringWithSHA256;
    verifyString: typeof _rsasign_verifyString;
    verifyHexSignatureForMessage: typeof _rsasign_verifyHexSignatureForMessage;
}
declare function RSADoPublic(x: any): any;
declare function RSASetPublic(N: any, E: any): void;
declare class RSASetPublic {
    constructor(N: any, E: any);
    n: jsbn.BigInteger | undefined;
    e: number | undefined;
}
declare function RSAEncrypt(text: any): any;
declare function RSADoPrivate(x: any): any;
declare function RSASetPrivate(N: any, E: any, D: any): void;
declare class RSASetPrivate {
    constructor(N: any, E: any, D: any);
    n: jsbn.BigInteger | undefined;
    e: number | undefined;
    d: jsbn.BigInteger | undefined;
}
declare function RSASetPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
declare class RSASetPrivateEx {
    constructor(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any);
    n: jsbn.BigInteger | undefined;
    e: number | undefined;
    d: jsbn.BigInteger | undefined;
    p: jsbn.BigInteger | undefined;
    q: jsbn.BigInteger | undefined;
    dmp1: jsbn.BigInteger | undefined;
    dmq1: jsbn.BigInteger | undefined;
    coeff: jsbn.BigInteger | undefined;
}
declare function RSAGenerate(B: any, E: any): void;
declare class RSAGenerate {
    constructor(B: any, E: any);
    e: number;
    p: jsbn.BigInteger;
    q: jsbn.BigInteger;
    n: jsbn.BigInteger;
    d: jsbn.BigInteger;
    dmp1: jsbn.BigInteger;
    dmq1: jsbn.BigInteger;
    coeff: jsbn.BigInteger;
}
declare function RSADecrypt(ctext: any): string | null;
declare function _rsasign_signString(s: any, hashAlg: any): any;
declare function _rsasign_signStringWithSHA1(s: any): any;
declare function _rsasign_signStringWithSHA256(s: any): any;
declare function _rsasign_verifyString(sMsg: any, hSig: any): boolean;
declare function _rsasign_verifyHexSignatureForMessage(hSig: any, sMsg: any): boolean;
import jsbn = require("./jsbn");
export {};
