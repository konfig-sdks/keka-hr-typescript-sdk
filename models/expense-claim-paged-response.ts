/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExpenseClaim } from './expense-claim';

/**
 * class represents paged response.
 * @export
 * @interface ExpenseClaimPagedResponse
 */
export interface ExpenseClaimPagedResponse {
    /**
     * Gets or sets a value indicating whether this Keka.API.Web.Core.Response`1 is succeeded.
     * @type {boolean}
     * @memberof ExpenseClaimPagedResponse
     */
    'succeeded'?: boolean;
    /**
     * Gets or sets the message.
     * @type {string}
     * @memberof ExpenseClaimPagedResponse
     */
    'message'?: string | null;
    /**
     * Gets or sets the errors.
     * @type {Array<string>}
     * @memberof ExpenseClaimPagedResponse
     */
    'errors'?: Array<string> | null;
    /**
     * Gets or sets the data.
     * @type {Array<ExpenseClaim>}
     * @memberof ExpenseClaimPagedResponse
     */
    'data'?: Array<ExpenseClaim> | null;
    /**
     * Gets or sets the page number.
     * @type {number}
     * @memberof ExpenseClaimPagedResponse
     */
    'pageNumber'?: number;
    /**
     * Gets or sets the size of the page.
     * @type {number}
     * @memberof ExpenseClaimPagedResponse
     */
    'pageSize'?: number;
    /**
     * Gets or sets the first page.
     * @type {string}
     * @memberof ExpenseClaimPagedResponse
     */
    'firstPage'?: string | null;
    /**
     * Gets or sets the last page.
     * @type {string}
     * @memberof ExpenseClaimPagedResponse
     */
    'lastPage'?: string | null;
    /**
     * Gets or sets the total pages.
     * @type {number}
     * @memberof ExpenseClaimPagedResponse
     */
    'totalPages'?: number;
    /**
     * Gets or sets the total records.
     * @type {number}
     * @memberof ExpenseClaimPagedResponse
     */
    'totalRecords'?: number;
    /**
     * Gets or sets the next page.
     * @type {string}
     * @memberof ExpenseClaimPagedResponse
     */
    'nextPage'?: string | null;
    /**
     * Gets or sets the previous page.
     * @type {string}
     * @memberof ExpenseClaimPagedResponse
     */
    'previousPage'?: string | null;
}

