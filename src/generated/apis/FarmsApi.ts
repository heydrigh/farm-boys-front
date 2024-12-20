/* tslint:disable */
/* eslint-disable */
/**
 * Farm boys doc
 * Farm boys documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateFarmDto,
  Farm,
  UpdateFarmDto,
} from '../models/index';
import {
    CreateFarmDtoFromJSON,
    CreateFarmDtoToJSON,
    FarmFromJSON,
    FarmToJSON,
    UpdateFarmDtoFromJSON,
    UpdateFarmDtoToJSON,
} from '../models/index';

export interface FarmsControllerCreateRequest {
    createFarmDto: CreateFarmDto;
}

export interface FarmsControllerFindOneRequest {
    id: string;
}

export interface FarmsControllerRemoveRequest {
    id: string;
}

export interface FarmsControllerUpdateRequest {
    id: string;
    updateFarmDto: UpdateFarmDto;
}

/**
 * 
 */
export class FarmsApi extends runtime.BaseAPI {

    /**
     * Create a new farm
     */
    async farmsControllerCreateRaw(requestParameters: FarmsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Farm>> {
        if (requestParameters['createFarmDto'] == null) {
            throw new runtime.RequiredError(
                'createFarmDto',
                'Required parameter "createFarmDto" was null or undefined when calling farmsControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/farms`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateFarmDtoToJSON(requestParameters['createFarmDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmFromJSON(jsonValue));
    }

    /**
     * Create a new farm
     */
    async farmsControllerCreate(requestParameters: FarmsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Farm> {
        const response = await this.farmsControllerCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve all farms
     */
    async farmsControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Farm>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/farms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FarmFromJSON));
    }

    /**
     * Retrieve all farms
     */
    async farmsControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Farm>> {
        const response = await this.farmsControllerFindAllRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a farm by ID
     */
    async farmsControllerFindOneRaw(requestParameters: FarmsControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Farm>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling farmsControllerFindOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/farms/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmFromJSON(jsonValue));
    }

    /**
     * Retrieve a farm by ID
     */
    async farmsControllerFindOne(requestParameters: FarmsControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Farm> {
        const response = await this.farmsControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a farm by ID
     */
    async farmsControllerRemoveRaw(requestParameters: FarmsControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling farmsControllerRemove().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/farms/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a farm by ID
     */
    async farmsControllerRemove(requestParameters: FarmsControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.farmsControllerRemoveRaw(requestParameters, initOverrides);
    }

    /**
     * Update a farm by ID
     */
    async farmsControllerUpdateRaw(requestParameters: FarmsControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Farm>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling farmsControllerUpdate().'
            );
        }

        if (requestParameters['updateFarmDto'] == null) {
            throw new runtime.RequiredError(
                'updateFarmDto',
                'Required parameter "updateFarmDto" was null or undefined when calling farmsControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/farms/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateFarmDtoToJSON(requestParameters['updateFarmDto']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FarmFromJSON(jsonValue));
    }

    /**
     * Update a farm by ID
     */
    async farmsControllerUpdate(requestParameters: FarmsControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Farm> {
        const response = await this.farmsControllerUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
