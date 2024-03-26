/* tslint:disable */
/* eslint-disable */
/*
Requisition

Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually!

Thus emerged Keka!

The version of the OpenAPI document: v1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { LeaveRequestPagedResponse } from '../models';
// @ts-ignore
import { PostLeaveRequest } from '../models';
// @ts-ignore
import { SessionType } from '../models';
// @ts-ignore
import { StringResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LeaveRequestsApi - axios parameter creator
 * @export
 */
export const LeaveRequestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an leave request and returns leave request identifier.
         * @summary Create an Leave Request
         * @param {PostLeaveRequest} [postLeaveRequest] The leave request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequestIdentifier: async (postLeaveRequest?: PostLeaveRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/time/leaverequests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: postLeaveRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/time/leaverequests',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(postLeaveRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all the leaves in the organization between `from` and `to` date.If both `from` and `to` are not specified, last 30 days records are returned.`from` date should be before `to` date.The difference between `from` and `to` date cannot be more than **90** days.
         * @summary Get all Leave Requests
         * @param {string} [employeeIds] Comma separated list of one or more Employee ids you\&#39;d like to filter on.
         * @param {string} [from] From date.
         * @param {string} [to] To date.
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllBetweenDates: async (employeeIds?: string, from?: string, to?: string, pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/time/leaverequests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)
            if (employeeIds !== undefined) {
                localVarQueryParameter['employeeIds'] = employeeIds;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (pageNumber !== undefined) {
                localVarQueryParameter['pageNumber'] = pageNumber;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/time/leaverequests',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LeaveRequestsApi - functional programming interface
 * @export
 */
export const LeaveRequestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LeaveRequestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an leave request and returns leave request identifier.
         * @summary Create an Leave Request
         * @param {LeaveRequestsApiCreateRequestIdentifierRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequestIdentifier(requestParameters: LeaveRequestsApiCreateRequestIdentifierRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringResponse>> {
            const postLeaveRequest: PostLeaveRequest = {
                employeeId: requestParameters.employeeId,
                requestedBy: requestParameters.requestedBy,
                fromDate: requestParameters.fromDate,
                toDate: requestParameters.toDate,
                fromSession: requestParameters.fromSession,
                toSession: requestParameters.toSession,
                leaveTypeId: requestParameters.leaveTypeId,
                reason: requestParameters.reason,
                note: requestParameters.note
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRequestIdentifier(postLeaveRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all the leaves in the organization between `from` and `to` date.If both `from` and `to` are not specified, last 30 days records are returned.`from` date should be before `to` date.The difference between `from` and `to` date cannot be more than **90** days.
         * @summary Get all Leave Requests
         * @param {LeaveRequestsApiGetAllBetweenDatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllBetweenDates(requestParameters: LeaveRequestsApiGetAllBetweenDatesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveRequestPagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllBetweenDates(requestParameters.employeeIds, requestParameters.from, requestParameters.to, requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LeaveRequestsApi - factory interface
 * @export
 */
export const LeaveRequestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LeaveRequestsApiFp(configuration)
    return {
        /**
         * Create an leave request and returns leave request identifier.
         * @summary Create an Leave Request
         * @param {LeaveRequestsApiCreateRequestIdentifierRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequestIdentifier(requestParameters: LeaveRequestsApiCreateRequestIdentifierRequest, options?: AxiosRequestConfig): AxiosPromise<StringResponse> {
            return localVarFp.createRequestIdentifier(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all the leaves in the organization between `from` and `to` date.If both `from` and `to` are not specified, last 30 days records are returned.`from` date should be before `to` date.The difference between `from` and `to` date cannot be more than **90** days.
         * @summary Get all Leave Requests
         * @param {LeaveRequestsApiGetAllBetweenDatesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllBetweenDates(requestParameters: LeaveRequestsApiGetAllBetweenDatesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<LeaveRequestPagedResponse> {
            return localVarFp.getAllBetweenDates(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRequestIdentifier operation in LeaveRequestsApi.
 * @export
 * @interface LeaveRequestsApiCreateRequestIdentifierRequest
 */
export type LeaveRequestsApiCreateRequestIdentifierRequest = {
    
} & PostLeaveRequest

/**
 * Request parameters for getAllBetweenDates operation in LeaveRequestsApi.
 * @export
 * @interface LeaveRequestsApiGetAllBetweenDatesRequest
 */
export type LeaveRequestsApiGetAllBetweenDatesRequest = {
    
    /**
    * Comma separated list of one or more Employee ids you\'d like to filter on.
    * @type {string}
    * @memberof LeaveRequestsApiGetAllBetweenDates
    */
    readonly employeeIds?: string
    
    /**
    * From date.
    * @type {string}
    * @memberof LeaveRequestsApiGetAllBetweenDates
    */
    readonly from?: string
    
    /**
    * To date.
    * @type {string}
    * @memberof LeaveRequestsApiGetAllBetweenDates
    */
    readonly to?: string
    
    /**
    * 
    * @type {number}
    * @memberof LeaveRequestsApiGetAllBetweenDates
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof LeaveRequestsApiGetAllBetweenDates
    */
    readonly pageSize?: number
    
}

/**
 * LeaveRequestsApiGenerated - object-oriented interface
 * @export
 * @class LeaveRequestsApiGenerated
 * @extends {BaseAPI}
 */
export class LeaveRequestsApiGenerated extends BaseAPI {
    /**
     * Create an leave request and returns leave request identifier.
     * @summary Create an Leave Request
     * @param {LeaveRequestsApiCreateRequestIdentifierRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveRequestsApiGenerated
     */
    public createRequestIdentifier(requestParameters: LeaveRequestsApiCreateRequestIdentifierRequest, options?: AxiosRequestConfig) {
        return LeaveRequestsApiFp(this.configuration).createRequestIdentifier(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all the leaves in the organization between `from` and `to` date.If both `from` and `to` are not specified, last 30 days records are returned.`from` date should be before `to` date.The difference between `from` and `to` date cannot be more than **90** days.
     * @summary Get all Leave Requests
     * @param {LeaveRequestsApiGetAllBetweenDatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LeaveRequestsApiGenerated
     */
    public getAllBetweenDates(requestParameters: LeaveRequestsApiGetAllBetweenDatesRequest = {}, options?: AxiosRequestConfig) {
        return LeaveRequestsApiFp(this.configuration).getAllBetweenDates(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
