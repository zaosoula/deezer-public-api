import { DeezerClient } from "../client.js";

/**
 * Creates the Infos module.
 * @param client The base DeezerClient instance.
 */
export function createInfosModule(client: DeezerClient) {
  return async () => {
    return client.request<any>(`infos`);
  };
}
