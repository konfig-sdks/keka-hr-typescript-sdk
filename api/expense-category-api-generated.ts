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
import { ExpenseCategoryPagedResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ExpenseCategoryApi - axios parameter creator
 * @export
 */
export const ExpenseCategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all Expense Categories
         * @summary Get all Expense Categories
         * @param {string} [expenseCategoryIds] Comma separated list of one or more  expense categories identifiers you\&#39;d like to filter on.
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCategories: async (expenseCategoryIds?: string, pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/expense/categories`;
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
            if (expenseCategoryIds !== undefined) {
                localVarQueryParameter['expenseCategoryIds'] = expenseCategoryIds;
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
                pathTemplate: '/expense/categories',
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
 * ExpenseCategoryApi - functional programming interface
 * @export
 */
export const ExpenseCategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExpenseCategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all Expense Categories
         * @summary Get all Expense Categories
         * @param {ExpenseCategoryApiGetAllCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCategories(requestParameters: ExpenseCategoryApiGetAllCategoriesRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExpenseCategoryPagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCategories(requestParameters.expenseCategoryIds, requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExpenseCategoryApi - factory interface
 * @export
 */
export const ExpenseCategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExpenseCategoryApiFp(configuration)
    return {
        /**
         * Get all Expense Categories
         * @summary Get all Expense Categories
         * @param {ExpenseCategoryApiGetAllCategoriesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCategories(requestParameters: ExpenseCategoryApiGetAllCategoriesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ExpenseCategoryPagedResponse> {
            return localVarFp.getAllCategories(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAllCategories operation in ExpenseCategoryApi.
 * @export
 * @interface ExpenseCategoryApiGetAllCategoriesRequest
 */
export type ExpenseCategoryApiGetAllCategoriesRequest = {
    
    /**
    * Comma separated list of one or more  expense categories identifiers you\'d like to filter on.
    * @type {string}
    * @memberof ExpenseCategoryApiGetAllCategories
    */
    readonly expenseCategoryIds?: string
    
    /**
    * 
    * @type {number}
    * @memberof ExpenseCategoryApiGetAllCategories
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof ExpenseCategoryApiGetAllCategories
    */
    readonly pageSize?: number
    
}

/**
 * ExpenseCategoryApiGenerated - object-oriented interface
 * @export
 * @class ExpenseCategoryApiGenerated
 * @extends {BaseAPI}
 */
export class ExpenseCategoryApiGenerated extends BaseAPI {
    /**
     * Get all Expense Categories
     * @summary Get all Expense Categories
     * @param {ExpenseCategoryApiGetAllCategoriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExpenseCategoryApiGenerated
     */
    public getAllCategories(requestParameters: ExpenseCategoryApiGetAllCategoriesRequest = {}, options?: AxiosRequestConfig) {
        return ExpenseCategoryApiFp(this.configuration).getAllCategories(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
