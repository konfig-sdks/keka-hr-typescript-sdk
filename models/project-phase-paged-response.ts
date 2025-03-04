/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectPhase } from './project-phase';

/**
 * class represents paged response.
 * @export
 * @interface ProjectPhasePagedResponse
 */
export interface ProjectPhasePagedResponse {
    /**
     * Gets or sets a value indicating whether this Keka.API.Web.Core.Response`1 is succeeded.
     * @type {boolean}
     * @memberof ProjectPhasePagedResponse
     */
    'succeeded'?: boolean;
    /**
     * Gets or sets the message.
     * @type {string}
     * @memberof ProjectPhasePagedResponse
     */
    'message'?: string | null;
    /**
     * Gets or sets the errors.
     * @type {Array<string>}
     * @memberof ProjectPhasePagedResponse
     */
    'errors'?: Array<string> | null;
    /**
     * Gets or sets the data.
     * @type {Array<ProjectPhase>}
     * @memberof ProjectPhasePagedResponse
     */
    'data'?: Array<ProjectPhase> | null;
    /**
     * Gets or sets the page number.
     * @type {number}
     * @memberof ProjectPhasePagedResponse
     */
    'pageNumber'?: number;
    /**
     * Gets or sets the size of the page.
     * @type {number}
     * @memberof ProjectPhasePagedResponse
     */
    'pageSize'?: number;
    /**
     * Gets or sets the first page.
     * @type {string}
     * @memberof ProjectPhasePagedResponse
     */
    'firstPage'?: string | null;
    /**
     * Gets or sets the last page.
     * @type {string}
     * @memberof ProjectPhasePagedResponse
     */
    'lastPage'?: string | null;
    /**
     * Gets or sets the total pages.
     * @type {number}
     * @memberof ProjectPhasePagedResponse
     */
    'totalPages'?: number;
    /**
     * Gets or sets the total records.
     * @type {number}
     * @memberof ProjectPhasePagedResponse
     */
    'totalRecords'?: number;
    /**
     * Gets or sets the next page.
     * @type {string}
     * @memberof ProjectPhasePagedResponse
     */
    'nextPage'?: string | null;
    /**
     * Gets or sets the previous page.
     * @type {string}
     * @memberof ProjectPhasePagedResponse
     */
    'previousPage'?: string | null;
}

