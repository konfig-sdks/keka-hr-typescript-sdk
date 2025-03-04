/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomField } from './custom-field';
import { JobType } from './job-type';
import { ReplacementEmployee } from './replacement-employee';
import { RequisitionRequestStatus } from './requisition-request-status';

/**
 * 
 * @export
 * @interface RequisitionRequest
 */
export interface RequisitionRequest {
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'requisitionFor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'jobNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'department'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'subDepartment'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'requestedBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'requestedOn'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RequisitionRequest
     */
    'locations'?: Array<string> | null;
    /**
     * 
     * @type {RequisitionRequestStatus}
     * @memberof RequisitionRequest
     */
    'status'?: RequisitionRequestStatus;
    /**
     * 
     * @type {boolean}
     * @memberof RequisitionRequest
     */
    'isPriority'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'budget'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RequisitionRequest
     */
    'openPositions'?: number;
    /**
     * 
     * @type {number}
     * @memberof RequisitionRequest
     */
    'hired'?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof RequisitionRequest
     */
    'requisitionTypes'?: Array<number> | null;
    /**
     * 
     * @type {Array<ReplacementEmployee>}
     * @memberof RequisitionRequest
     */
    'toBeReplaced'?: Array<ReplacementEmployee> | null;
    /**
     * 
     * @type {JobType}
     * @memberof RequisitionRequest
     */
    'jobType'?: JobType;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'targetHiringDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RequisitionRequest
     */
    'isArchived'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequisitionRequest
     */
    'additionalComments'?: string | null;
    /**
     * 
     * @type {Array<CustomField>}
     * @memberof RequisitionRequest
     */
    'additionalFields'?: Array<CustomField> | null;
}

