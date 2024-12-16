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
 * @interface UpdateFarmDto
 */
export interface UpdateFarmDto {
    /**
     * Name of the farm
     * @type {string}
     * @memberof UpdateFarmDto
     */
    name?: string;
    /**
     * City where the farm is located
     * @type {string}
     * @memberof UpdateFarmDto
     */
    city?: string;
    /**
     * State where the farm is located
     * @type {string}
     * @memberof UpdateFarmDto
     */
    state?: string;
    /**
     * Total area of the farm in hectares
     * @type {number}
     * @memberof UpdateFarmDto
     */
    totalArea?: number;
    /**
     * Agricultural area of the farm in hectares
     * @type {number}
     * @memberof UpdateFarmDto
     */
    agriculturalArea?: number;
    /**
     * Vegetation area of the farm in hectares
     * @type {number}
     * @memberof UpdateFarmDto
     */
    vegetationArea?: number;
    /**
     * ID of the producer who owns the farm
     * @type {string}
     * @memberof UpdateFarmDto
     */
    producerId?: string;
    /**
     * List of crop IDs associated with the farm
     * @type {Array<string>}
     * @memberof UpdateFarmDto
     */
    cropIds?: Array<string>;
}

/**
 * Check if a given object implements the UpdateFarmDto interface.
 */
export function instanceOfUpdateFarmDto(value: object): value is UpdateFarmDto {
    return true;
}

export function UpdateFarmDtoFromJSON(json: any): UpdateFarmDto {
    return UpdateFarmDtoFromJSONTyped(json, false);
}

export function UpdateFarmDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFarmDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'city': json['city'] == null ? undefined : json['city'],
        'state': json['state'] == null ? undefined : json['state'],
        'totalArea': json['totalArea'] == null ? undefined : json['totalArea'],
        'agriculturalArea': json['agriculturalArea'] == null ? undefined : json['agriculturalArea'],
        'vegetationArea': json['vegetationArea'] == null ? undefined : json['vegetationArea'],
        'producerId': json['producerId'] == null ? undefined : json['producerId'],
        'cropIds': json['cropIds'] == null ? undefined : json['cropIds'],
    };
}

export function UpdateFarmDtoToJSON(json: any): UpdateFarmDto {
    return UpdateFarmDtoToJSONTyped(json, false);
}

export function UpdateFarmDtoToJSONTyped(value?: UpdateFarmDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'city': value['city'],
        'state': value['state'],
        'totalArea': value['totalArea'],
        'agriculturalArea': value['agriculturalArea'],
        'vegetationArea': value['vegetationArea'],
        'producerId': value['producerId'],
        'cropIds': value['cropIds'],
    };
}
