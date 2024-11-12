import type { GlobalThis } from "./types";

declare const window: GlobalThis;
declare const global: GlobalThis;
declare const self: GlobalThis;

/**
 * Returns the global object.
 *
 * @returns Global object.
 */
export function getGlobal(): GlobalThis {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof global !== "undefined") {
    return global;
  } else if (typeof self !== "undefined") {
    return self;
  } else {
    return {} as GlobalThis;
  }
}
