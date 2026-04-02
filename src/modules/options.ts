import { DeezerClient } from "../client.js";
import { DeezerOptions } from "../types/index.js";

/**
 * Creates the Options module.
 * @param client The base DeezerClient instance.
 */
export function createOptionsModule(client: DeezerClient) {
  return async () => {
    return client.request<DeezerOptions>(`options`);
  };
}
