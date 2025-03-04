/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { APIEmployeeLookup } from './apiemployee-lookup';
import { APIEmployeeSalaryComponent } from './apiemployee-salary-component';
import { RemunerationType } from './remuneration-type';

/**
 * 
 * @export
 * @interface APIEmployeeSalary
 */
export interface APIEmployeeSalary {
    /**
     * 
     * @type {string}
     * @memberof APIEmployeeSalary
     */
    'id'?: string | null;
    /**
     * 
     * @type {APIEmployeeLookup}
     * @memberof APIEmployeeSalary
     */
    'employee'?: APIEmployeeLookup;
    /**
     * 
     * @type {number}
     * @memberof APIEmployeeSalary
     */
    'ctc'?: number;
    /**
     * 
     * @type {number}
     * @memberof APIEmployeeSalary
     */
    'gross'?: number;
    /**
     * 
     * @type {RemunerationType}
     * @memberof APIEmployeeSalary
     */
    'remunerationType'?: RemunerationType;
    /**
     * 
     * @type {string}
     * @memberof APIEmployeeSalary
     */
    'effectiveFrom'?: string;
    /**
     * 
     * @type {Array<APIEmployeeSalaryComponent>}
     * @memberof APIEmployeeSalary
     */
    'earnings'?: Array<APIEmployeeSalaryComponent> | null;
    /**
     * 
     * @type {Array<APIEmployeeSalaryComponent>}
     * @memberof APIEmployeeSalary
     */
    'deductions'?: Array<APIEmployeeSalaryComponent> | null;
}

