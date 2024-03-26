/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Gender } from './gender';

/**
 * 
 * @export
 * @interface Employee
 */
export interface Employee {
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'employeeNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'displayName': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'middleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'mobileNumber'?: string | null;
    /**
     * 
     * @type {Gender}
     * @memberof Employee
     */
    'gender': Gender;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'dateOfBirth': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'dateJoined': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'department': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'businessUnit': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'jobTitle': string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'secondaryJobTitle'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    'location': string;
}

