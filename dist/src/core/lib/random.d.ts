export function init(Math: any): any;
export function SeededRandom(): void;
export class SeededRandom {
    nextBytes: typeof SRnextBytes;
}
export function SecureRandom(): void;
export class SecureRandom {
    nextBytes: typeof rng_get_bytes;
}
declare function SRnextBytes(ba: any): void;
declare function rng_get_bytes(ba: any): void;
export {};
