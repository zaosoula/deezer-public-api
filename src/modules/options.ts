import { DeezerClient } from "../client.js";
import { Options } from "../types/index.js";

/**
 * Creates the Options module.
 * @param client The base DeezerClient instance.
 */
export function createOptionsModule(client: DeezerClient) {
  return async () => {
    return client.request<Options>(`options`);
  };
}
