import * as wasm from "./xor_bg.wasm";
import { __wbg_set_wasm } from "./xor_bg.js";
__wbg_set_wasm(wasm);
export * from "./xor_bg.js";
