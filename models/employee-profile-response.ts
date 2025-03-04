/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeProfile } from './employee-profile';

/**
 * class represents response.
 * @export
 * @interface EmployeeProfileResponse
 */
export interface EmployeeProfileResponse {
    /**
     * Gets or sets a value indicating whether this Keka.API.Web.Core.Response`1 is succeeded.
     * @type {boolean}
     * @memberof EmployeeProfileResponse
     */
    'succeeded'?: boolean;
    /**
     * Gets or sets the message.
     * @type {string}
     * @memberof EmployeeProfileResponse
     */
    'message'?: string | null;
    /**
     * Gets or sets the errors.
     * @type {Array<string>}
     * @memberof EmployeeProfileResponse
     */
    'errors'?: Array<string> | null;
    /**
     * 
     * @type {EmployeeProfile}
     * @memberof EmployeeProfileResponse
     */
    'data'?: EmployeeProfile;
}

