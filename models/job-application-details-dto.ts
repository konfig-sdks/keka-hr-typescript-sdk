/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApplicationStatus } from './application-status';

/**
 * 
 * @export
 * @interface JobApplicationDetailsDTO
 */
export interface JobApplicationDetailsDTO {
    /**
     * Gets or sets the job hiring stage identifier.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'jobHiringStageId'?: string | null;
    /**
     * Gets or sets the moved to current stage on.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'movedtoStageOn'?: string | null;
    /**
     * Gets or sets the screening questions.
     * @type {{ [key: string]: string; }}
     * @memberof JobApplicationDetailsDTO
     */
    'screeningQuestionsResponse'?: { [key: string]: string; } | null;
    /**
     * Gets or sets the applied on.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'appliedOn'?: string | null;
    /**
     * 
     * @type {ApplicationStatus}
     * @memberof JobApplicationDetailsDTO
     */
    'status'?: ApplicationStatus;
    /**
     * Gets or sets the sourced by.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'sourcedBy'?: string | null;
    /**
     * Gets or sets the source title.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'sourceTitle'?: string | null;
    /**
     * Gets or sets the assigned to.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'assignedTo'?: string | null;
    /**
     * Gets or sets the assigned on.
     * @type {string}
     * @memberof JobApplicationDetailsDTO
     */
    'assignedOn'?: string | null;
}

