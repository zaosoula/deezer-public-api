import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerAlbum,
  DeezerEditorial,
  DeezerIdOptions,
  DeezerEditorialSelectionOptions,
} from "../types/index.js";

/**
 * Creates the Editorial module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createEditorialModule(client: DeezerClient) {
  /**
   * Get editorial data.
   */
  const editorial = async (options: Partial<DeezerIdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<DeezerEditorial>(`editorial/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get editorial selection.
   */
  const selection = async (options: DeezerEditorialSelectionOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerAlbum>>(
      `editorial/${id}/selection`,
      params,
    );
  };

  /**
   * Get editorial charts.
   */
  const charts = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<any>(`editorial/${id}/charts`, params);
  };

  /**
   * Get editorial releases.
   */
  const releases = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerAlbum>>(`editorial/${id}/releases`, params);
  };

  return Object.assign(editorial, {
    selection,
    charts,
    releases,
  });
}
