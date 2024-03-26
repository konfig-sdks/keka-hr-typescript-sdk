/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectStatus } from './project-status';

/**
 * 
 * @export
 * @interface UpdateProject
 */
export interface UpdateProject {
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    'code'?: string | null;
    /**
     * 
     * @type {ProjectStatus}
     * @memberof UpdateProject
     */
    'status'?: ProjectStatus;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    'startDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProject
     */
    'endDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateProject
     */
    'isBillable'?: boolean | null;
}

