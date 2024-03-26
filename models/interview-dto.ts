/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeDTO } from './time-dto';

/**
 * 
 * @export
 * @interface InterviewDTO
 */
export interface InterviewDTO {
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'candidateId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'jobId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'interviewDate'?: string | null;
    /**
     * 
     * @type {TimeDTO}
     * @memberof InterviewDTO
     */
    'startTime'?: TimeDTO;
    /**
     * 
     * @type {TimeDTO}
     * @memberof InterviewDTO
     */
    'endTime'?: TimeDTO;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'timeZoneId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'scheduledBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'scheduledDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'interviewType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'stageId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof InterviewDTO
     */
    'panelMembers'?: string | null;
}

