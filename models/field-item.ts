/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FieldChoice } from './field-choice';
import { FieldType } from './field-type';

/**
 * 
 * @export
 * @interface FieldItem
 */
export interface FieldItem {
    /**
     * 
     * @type {string}
     * @memberof FieldItem
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FieldItem
     */
    'fieldName'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FieldItem
     */
    'required'?: boolean;
    /**
     * 
     * @type {FieldType}
     * @memberof FieldItem
     */
    'fieldType'?: FieldType;
    /**
     * 
     * @type {boolean}
     * @memberof FieldItem
     */
    'isSystemDefined'?: boolean;
    /**
     * 
     * @type {Array<FieldChoice>}
     * @memberof FieldItem
     */
    'fieldOptions'?: Array<FieldChoice> | null;
}

