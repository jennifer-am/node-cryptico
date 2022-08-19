export { aes as internal };
declare namespace aes {
    const Sbox: number[];
    const ShiftRowTab: number[];
    function Init(): void;
    function Done(): void;
    function ExpandKey(key: any): void;
    function Encrypt(block: any, key: any): void;
    function Decrypt(block: any, key: any): void;
    function SubBytes(state: any, sbox: any): void;
    function AddRoundKey(state: any, rkey: any): void;
    function ShiftRows(state: any, shifttab: any): void;
    function MixColumns(state: any): void;
    function MixColumns_Inv(state: any): void;
}
