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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TotalFarmsResponse
 */
export interface TotalFarmsResponse {
    /**
     * Total number of farms
     * @type {number}
     * @memberof TotalFarmsResponse
     */
    totalFarms: number;
}

/**
 * Check if a given object implements the TotalFarmsResponse interface.
 */
export function instanceOfTotalFarmsResponse(value: object): value is TotalFarmsResponse {
    if (!('totalFarms' in value) || value['totalFarms'] === undefined) return false;
    return true;
}

export function TotalFarmsResponseFromJSON(json: any): TotalFarmsResponse {
    return TotalFarmsResponseFromJSONTyped(json, false);
}

export function TotalFarmsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TotalFarmsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'totalFarms': json['totalFarms'],
    };
}

export function TotalFarmsResponseToJSON(json: any): TotalFarmsResponse {
    return TotalFarmsResponseToJSONTyped(json, false);
}

export function TotalFarmsResponseToJSONTyped(value?: TotalFarmsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalFarms': value['totalFarms'],
    };
}
