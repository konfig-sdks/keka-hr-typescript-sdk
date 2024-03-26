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
import { RequisitionRequestPagedResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RequisitionRequestApi - axios parameter creator
 * @export
 */
export const RequisitionRequestApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all Requisition Requests
         * @summary Get all Requisition Requests
         * @param {string} [requisitionRequestIds] The requisition request ids.
         * @param {string} [status] The status.
         * @param {string} [lastModified] The last modified.
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (requisitionRequestIds?: string, status?: string, lastModified?: string, pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/requisition/requests`;
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
            if (requisitionRequestIds !== undefined) {
                localVarQueryParameter['requisitionRequestIds'] = requisitionRequestIds;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (lastModified !== undefined) {
                localVarQueryParameter['lastModified'] = (lastModified as any instanceof Date) ?
                    (lastModified as any).toISOString() :
                    lastModified;
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
                pathTemplate: '/requisition/requests',
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
 * RequisitionRequestApi - functional programming interface
 * @export
 */
export const RequisitionRequestApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RequisitionRequestApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all Requisition Requests
         * @summary Get all Requisition Requests
         * @param {RequisitionRequestApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: RequisitionRequestApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RequisitionRequestPagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.requisitionRequestIds, requestParameters.status, requestParameters.lastModified, requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RequisitionRequestApi - factory interface
 * @export
 */
export const RequisitionRequestApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RequisitionRequestApiFp(configuration)
    return {
        /**
         * Get all Requisition Requests
         * @summary Get all Requisition Requests
         * @param {RequisitionRequestApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: RequisitionRequestApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<RequisitionRequestPagedResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in RequisitionRequestApi.
 * @export
 * @interface RequisitionRequestApiGetAllRequest
 */
export type RequisitionRequestApiGetAllRequest = {
    
    /**
    * The requisition request ids.
    * @type {string}
    * @memberof RequisitionRequestApiGetAll
    */
    readonly requisitionRequestIds?: string
    
    /**
    * The status.
    * @type {string}
    * @memberof RequisitionRequestApiGetAll
    */
    readonly status?: string
    
    /**
    * The last modified.
    * @type {string}
    * @memberof RequisitionRequestApiGetAll
    */
    readonly lastModified?: string
    
    /**
    * 
    * @type {number}
    * @memberof RequisitionRequestApiGetAll
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof RequisitionRequestApiGetAll
    */
    readonly pageSize?: number
    
}

/**
 * RequisitionRequestApiGenerated - object-oriented interface
 * @export
 * @class RequisitionRequestApiGenerated
 * @extends {BaseAPI}
 */
export class RequisitionRequestApiGenerated extends BaseAPI {
    /**
     * Get all Requisition Requests
     * @summary Get all Requisition Requests
     * @param {RequisitionRequestApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequisitionRequestApiGenerated
     */
    public getAll(requestParameters: RequisitionRequestApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return RequisitionRequestApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
