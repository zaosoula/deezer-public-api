import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Album,
  Editorial,
  IdOptions,
  EditorialSelectionOptions,
} from "../types/index.js";

/**
 * Creates the Editorial module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createEditorialModule(client: DeezerClient) {
  /**
   * Get editorial data.
   */
  const editorial = async (options: Partial<IdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<Editorial>(`editorial/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get editorial selection.
   */
  const selection = async (options: EditorialSelectionOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Album>>(
      `editorial/${id}/selection`,
      params,
    );
  };

  /**
   * Get editorial charts.
   */
  const charts = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<any>(`editorial/${id}/charts`, params);
  };

  /**
   * Get editorial releases.
   */
  const releases = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Album>>(`editorial/${id}/releases`, params);
  };

  return Object.assign(editorial, {
    selection,
    charts,
    releases,
  });
}
