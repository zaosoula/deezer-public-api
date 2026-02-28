import { DeezerClient } from "../client.js";
import { PaginationResult, Album, Editorial } from "../types/index.js";

/**
 * Creates the Editorial module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createEditorialModule(client: DeezerClient) {
  /**
   * Get editorial data.
   * @param id The editorial ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const editorial = async (
    id?: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<Editorial>(
      `editorial/${id !== undefined ? id : ""}`,
      { limit, index },
    );
  };

  /**
   * Get editorial selection.
   * @param id The editorial ID.
   * @param date The date for the selection.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const selection = async (
    id: number | string,
    date?: string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Album>>(
      `editorial/${id}/selection`,
      {
        date,
        limit,
        index,
      },
    );
  };

  /**
   * Get editorial charts.
   * @param id The editorial ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const charts = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<any>(`editorial/${id}/charts`, { limit, index });
  };

  /**
   * Get editorial releases.
   * @param id The editorial ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const releases = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Album>>(`editorial/${id}/releases`, {
      limit,
      index,
    });
  };

  return Object.assign(editorial, {
    selection,
    charts,
    releases,
  });
}
