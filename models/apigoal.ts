/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { APIBaseGoal } from './apibase-goal';
import { GoalMetricType } from './goal-metric-type';
import { GoalStatus } from './goal-status';
import { GoalType } from './goal-type';

/**
 * 
 * @export
 * @interface APIGoal
 */
export interface APIGoal {
    /**
     * 
     * @type {Array<string>}
     * @memberof APIGoal
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'employeeId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'employeeNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'timeFrameId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'endDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof APIGoal
     */
    'initialValue'?: number;
    /**
     * 
     * @type {number}
     * @memberof APIGoal
     */
    'targetValue'?: number;
    /**
     * 
     * @type {number}
     * @memberof APIGoal
     */
    'currentValue'?: number;
    /**
     * 
     * @type {number}
     * @memberof APIGoal
     */
    'progress'?: number;
    /**
     * 
     * @type {GoalMetricType}
     * @memberof APIGoal
     */
    'metricType'?: GoalMetricType;
    /**
     * 
     * @type {GoalStatus}
     * @memberof APIGoal
     */
    'status'?: GoalStatus;
    /**
     * 
     * @type {GoalType}
     * @memberof APIGoal
     */
    'type'?: GoalType;
    /**
     * 
     * @type {string}
     * @memberof APIGoal
     */
    'departmentId'?: string | null;
    /**
     * 
     * @type {APIBaseGoal}
     * @memberof APIGoal
     */
    'parentGoal'?: APIBaseGoal;
    /**
     * 
     * @type {Array<APIBaseGoal>}
     * @memberof APIGoal
     */
    'childGoals'?: Array<APIBaseGoal> | null;
    /**
     * 
     * @type {boolean}
     * @memberof APIGoal
     */
    'isPrivate'?: boolean;
}

