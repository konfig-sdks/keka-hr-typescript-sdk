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
import { Address } from '../models';
// @ts-ignore
import { BloodGroup } from '../models';
// @ts-ignore
import { BooleanResponse } from '../models';
// @ts-ignore
import { Employee } from '../models';
// @ts-ignore
import { EmployeeFieldResponse } from '../models';
// @ts-ignore
import { EmployeeProfilePagedResponse } from '../models';
// @ts-ignore
import { EmployeeProfileResponse } from '../models';
// @ts-ignore
import { Gender } from '../models';
// @ts-ignore
import { JobDetailsUpdateRequest } from '../models';
// @ts-ignore
import { MaritalStatus } from '../models';
// @ts-ignore
import { PersonalDetailsUpdateRequest } from '../models';
// @ts-ignore
import { Relation } from '../models';
// @ts-ignore
import { StringResponse } from '../models';
// @ts-ignore
import { TimeType } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeesApi - axios parameter creator
 * @export
 */
export const EmployeesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an Employee and returns created employee identifier.
         * @summary Create an Employee
         * @param {Employee} [employee] The employee.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmployee: async (employee?: Employee, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hris/employees`;
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
                requestBody: employee,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/hris/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employee, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets all employees / the specified employees based on employee search parameters.
         * @summary Get all Employees
         * @param {string} [employeeIds] Comma separated list of one or more Employee ids you\&#39;d like to filter on.
         * @param {string} [employeeNumbers] Comma separated list of one or more Employee numbers you\&#39;d like to filter on.
         * @param {string} [employmentStatus] Comma separated list of one or more Employment Status you\&#39;d like to filter on, allowed values are Working, Relieved.
         * @param {boolean} [inProbation] Fetches employees who are in probation. The allowed value is true or false.
         * @param {boolean} [inNoticePeriod] Fetches employees who are in notice period. The allowed value is true or false.
         * @param {string} [lastModified] Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm).
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (employeeIds?: string, employeeNumbers?: string, employmentStatus?: string, inProbation?: boolean, inNoticePeriod?: boolean, lastModified?: string, pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hris/employees`;
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

            if (employeeNumbers !== undefined) {
                localVarQueryParameter['employeeNumbers'] = employeeNumbers;
            }

            if (employmentStatus !== undefined) {
                localVarQueryParameter['employmentStatus'] = employmentStatus;
            }

            if (inProbation !== undefined) {
                localVarQueryParameter['inProbation'] = inProbation;
            }

            if (inNoticePeriod !== undefined) {
                localVarQueryParameter['inNoticePeriod'] = inNoticePeriod;
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
                pathTemplate: '/hris/employees',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all update fields
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] Represents how many results you\&#39;d like to retrieve per request (page). Default is 100. Max is 200
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUpdateFields: async (pageNumber?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hris/employees/updatefields`;
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
                pathTemplate: '/hris/employees/updatefields',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an employee with specified identifier.
         * @summary Get an Employee
         * @param {string} id The identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/hris/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/hris/employees/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update employee job details.
         * @summary Update employee job details
         * @param {string} id The identifier.
         * @param {JobDetailsUpdateRequest} [jobDetailsUpdateRequest] The job details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateJobDetails: async (id: string, jobDetailsUpdateRequest?: JobDetailsUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateJobDetails', 'id', id)
            const localVarPath = `/hris/employees/{id}/jobdetails`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                requestBody: jobDetailsUpdateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/hris/employees/{id}/jobdetails',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobDetailsUpdateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Employee personal details.
         * @summary Update Employee personal details
         * @param {string} id The identifier.
         * @param {PersonalDetailsUpdateRequest} [personalDetailsUpdateRequest] The personal details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePersonalDetails: async (id: string, personalDetailsUpdateRequest?: PersonalDetailsUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updatePersonalDetails', 'id', id)
            const localVarPath = `/hris/employees/{id}/personaldetails`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                requestBody: personalDetailsUpdateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/hris/employees/{id}/personaldetails',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(personalDetailsUpdateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeesApi - functional programming interface
 * @export
 */
export const EmployeesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an Employee and returns created employee identifier.
         * @summary Create an Employee
         * @param {EmployeesApiCreateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmployee(requestParameters: EmployeesApiCreateEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StringResponse>> {
            const employee: Employee = {
                employeeNumber: requestParameters.employeeNumber,
                displayName: requestParameters.displayName,
                firstName: requestParameters.firstName,
                middleName: requestParameters.middleName,
                lastName: requestParameters.lastName,
                email: requestParameters.email,
                mobileNumber: requestParameters.mobileNumber,
                gender: requestParameters.gender,
                dateOfBirth: requestParameters.dateOfBirth,
                dateJoined: requestParameters.dateJoined,
                department: requestParameters.department,
                businessUnit: requestParameters.businessUnit,
                jobTitle: requestParameters.jobTitle,
                secondaryJobTitle: requestParameters.secondaryJobTitle,
                location: requestParameters.location
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEmployee(employee, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all employees / the specified employees based on employee search parameters.
         * @summary Get all Employees
         * @param {EmployeesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: EmployeesApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeProfilePagedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.employeeIds, requestParameters.employeeNumbers, requestParameters.employmentStatus, requestParameters.inProbation, requestParameters.inNoticePeriod, requestParameters.lastModified, requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all update fields
         * @param {EmployeesApiGetAllUpdateFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUpdateFields(requestParameters: EmployeesApiGetAllUpdateFieldsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllUpdateFields(requestParameters.pageNumber, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get an employee with specified identifier.
         * @summary Get an Employee
         * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update employee job details.
         * @summary Update employee job details
         * @param {EmployeesApiUpdateJobDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateJobDetails(requestParameters: EmployeesApiUpdateJobDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanResponse>> {
            const jobDetailsUpdateRequest: JobDetailsUpdateRequest = {
                employeeNumber: requestParameters.employeeNumber,
                location: requestParameters.location,
                businessUnit: requestParameters.businessUnit,
                department: requestParameters.department,
                jobTitle: requestParameters.jobTitle,
                reportingManager: requestParameters.reportingManager,
                attendanceNumber: requestParameters.attendanceNumber,
                timeType: requestParameters.timeType,
                attendanceCaptureScheme: requestParameters.attendanceCaptureScheme,
                expensePolicy: requestParameters.expensePolicy,
                noticePeriod: requestParameters.noticePeriod,
                holidayList: requestParameters.holidayList,
                costCenter: requestParameters.costCenter,
                payBand: requestParameters.payBand,
                payGrade: requestParameters.payGrade,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateJobDetails(requestParameters.id, jobDetailsUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update Employee personal details.
         * @summary Update Employee personal details
         * @param {EmployeesApiUpdatePersonalDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePersonalDetails(requestParameters: EmployeesApiUpdatePersonalDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BooleanResponse>> {
            const personalDetailsUpdateRequest: PersonalDetailsUpdateRequest = {
                displayName: requestParameters.displayName,
                firstName: requestParameters.firstName,
                middleName: requestParameters.middleName,
                lastName: requestParameters.lastName,
                gender: requestParameters.gender,
                dateOfBirth: requestParameters.dateOfBirth,
                workPhone: requestParameters.workPhone,
                homePhone: requestParameters.homePhone,
                personalEmail: requestParameters.personalEmail,
                skypeId: requestParameters.skypeId,
                maritalStatus: requestParameters.maritalStatus,
                marriageDate: requestParameters.marriageDate,
                relations: requestParameters.relations,
                bloodGroup: requestParameters.bloodGroup,
                currentAddress: requestParameters.currentAddress,
                permanentAddress: requestParameters.permanentAddress,
                professionalSummary: requestParameters.professionalSummary,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePersonalDetails(requestParameters.id, personalDetailsUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeesApi - factory interface
 * @export
 */
export const EmployeesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeesApiFp(configuration)
    return {
        /**
         * Create an Employee and returns created employee identifier.
         * @summary Create an Employee
         * @param {EmployeesApiCreateEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmployee(requestParameters: EmployeesApiCreateEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<StringResponse> {
            return localVarFp.createEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets all employees / the specified employees based on employee search parameters.
         * @summary Get all Employees
         * @param {EmployeesApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: EmployeesApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeeProfilePagedResponse> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all update fields
         * @param {EmployeesApiGetAllUpdateFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUpdateFields(requestParameters: EmployeesApiGetAllUpdateFieldsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeeFieldResponse> {
            return localVarFp.getAllUpdateFields(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an employee with specified identifier.
         * @summary Get an Employee
         * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeProfileResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update employee job details.
         * @summary Update employee job details
         * @param {EmployeesApiUpdateJobDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateJobDetails(requestParameters: EmployeesApiUpdateJobDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<BooleanResponse> {
            return localVarFp.updateJobDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Employee personal details.
         * @summary Update Employee personal details
         * @param {EmployeesApiUpdatePersonalDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePersonalDetails(requestParameters: EmployeesApiUpdatePersonalDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<BooleanResponse> {
            return localVarFp.updatePersonalDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createEmployee operation in EmployeesApi.
 * @export
 * @interface EmployeesApiCreateEmployeeRequest
 */
export type EmployeesApiCreateEmployeeRequest = {
    
} & Employee

/**
 * Request parameters for getAll operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetAllRequest
 */
export type EmployeesApiGetAllRequest = {
    
    /**
    * Comma separated list of one or more Employee ids you\'d like to filter on.
    * @type {string}
    * @memberof EmployeesApiGetAll
    */
    readonly employeeIds?: string
    
    /**
    * Comma separated list of one or more Employee numbers you\'d like to filter on.
    * @type {string}
    * @memberof EmployeesApiGetAll
    */
    readonly employeeNumbers?: string
    
    /**
    * Comma separated list of one or more Employment Status you\'d like to filter on, allowed values are Working, Relieved.
    * @type {string}
    * @memberof EmployeesApiGetAll
    */
    readonly employmentStatus?: string
    
    /**
    * Fetches employees who are in probation. The allowed value is true or false.
    * @type {boolean}
    * @memberof EmployeesApiGetAll
    */
    readonly inProbation?: boolean
    
    /**
    * Fetches employees who are in notice period. The allowed value is true or false.
    * @type {boolean}
    * @memberof EmployeesApiGetAll
    */
    readonly inNoticePeriod?: boolean
    
    /**
    * Date/time when this time off request was last modified, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm).
    * @type {string}
    * @memberof EmployeesApiGetAll
    */
    readonly lastModified?: string
    
    /**
    * 
    * @type {number}
    * @memberof EmployeesApiGetAll
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof EmployeesApiGetAll
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for getAllUpdateFields operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetAllUpdateFieldsRequest
 */
export type EmployeesApiGetAllUpdateFieldsRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof EmployeesApiGetAllUpdateFields
    */
    readonly pageNumber?: number
    
    /**
    * Represents how many results you\'d like to retrieve per request (page). Default is 100. Max is 200
    * @type {number}
    * @memberof EmployeesApiGetAllUpdateFields
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for getById operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetByIdRequest
 */
export type EmployeesApiGetByIdRequest = {
    
    /**
    * The identifier.
    * @type {string}
    * @memberof EmployeesApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for updateJobDetails operation in EmployeesApi.
 * @export
 * @interface EmployeesApiUpdateJobDetailsRequest
 */
export type EmployeesApiUpdateJobDetailsRequest = {
    
    /**
    * The identifier.
    * @type {string}
    * @memberof EmployeesApiUpdateJobDetails
    */
    readonly id: string
    
} & JobDetailsUpdateRequest

/**
 * Request parameters for updatePersonalDetails operation in EmployeesApi.
 * @export
 * @interface EmployeesApiUpdatePersonalDetailsRequest
 */
export type EmployeesApiUpdatePersonalDetailsRequest = {
    
    /**
    * The identifier.
    * @type {string}
    * @memberof EmployeesApiUpdatePersonalDetails
    */
    readonly id: string
    
} & PersonalDetailsUpdateRequest

/**
 * EmployeesApiGenerated - object-oriented interface
 * @export
 * @class EmployeesApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeesApiGenerated extends BaseAPI {
    /**
     * Create an Employee and returns created employee identifier.
     * @summary Create an Employee
     * @param {EmployeesApiCreateEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public createEmployee(requestParameters: EmployeesApiCreateEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).createEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all employees / the specified employees based on employee search parameters.
     * @summary Get all Employees
     * @param {EmployeesApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getAll(requestParameters: EmployeesApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all update fields
     * @param {EmployeesApiGetAllUpdateFieldsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getAllUpdateFields(requestParameters: EmployeesApiGetAllUpdateFieldsRequest = {}, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getAllUpdateFields(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an employee with specified identifier.
     * @summary Get an Employee
     * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update employee job details.
     * @summary Update employee job details
     * @param {EmployeesApiUpdateJobDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public updateJobDetails(requestParameters: EmployeesApiUpdateJobDetailsRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).updateJobDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Employee personal details.
     * @summary Update Employee personal details
     * @param {EmployeesApiUpdatePersonalDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public updatePersonalDetails(requestParameters: EmployeesApiUpdatePersonalDetailsRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).updatePersonalDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
