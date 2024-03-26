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
import { ApiLookupPagedResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PayGradesApi - axios parameter creator
 * @export
 */
export const PayGradesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets all Pay Grades.
         * @summary Get all Pay Grades
         * @param {string} [payGradeIds] The paygrade ids.
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (payGradeIds?: string, pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payroll/paygrades`;
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
            if (payGradeIds !== undefined) {
                localVarQueryParameter['payGradeIds'] = payGradeIds;
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
                pathTemplate: '/payroll/paygrades',
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
 * PayGradesApi - functional programming interface
 * @export
 */
export const PayGradesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PayGradesApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets all Pay Grades.
         * @summary Get all Pay Grades
         * @param {PayGradesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: PayGradesApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ApiLookupPagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.payGradeIds, requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PayGradesApi - factory interface
 * @export
 */
export const PayGradesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PayGradesApiFp(configuration)
    return {
        /**
         * Gets all Pay Grades.
         * @summary Get all Pay Grades
         * @param {PayGradesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: PayGradesApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ApiLookupPagedResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in PayGradesApi.
 * @export
 * @interface PayGradesApiGetAllRequest
 */
export type PayGradesApiGetAllRequest = {
    
    /**
    * The paygrade ids.
    * @type {string}
    * @memberof PayGradesApiGetAll
    */
    readonly payGradeIds?: string
    
    /**
    * 
    * @type {number}
    * @memberof PayGradesApiGetAll
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof PayGradesApiGetAll
    */
    readonly pageSize?: number
    
}

/**
 * PayGradesApiGenerated - object-oriented interface
 * @export
 * @class PayGradesApiGenerated
 * @extends {BaseAPI}
 */
export class PayGradesApiGenerated extends BaseAPI {
    /**
     * Gets all Pay Grades.
     * @summary Get all Pay Grades
     * @param {PayGradesApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayGradesApiGenerated
     */
    public getAll(requestParameters: PayGradesApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return PayGradesApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
