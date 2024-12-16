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
import type { Farm } from './Farm';
import {
    FarmFromJSON,
    FarmFromJSONTyped,
    FarmToJSON,
    FarmToJSONTyped,
} from './Farm';

/**
 * 
 * @export
 * @interface Crop
 */
export interface Crop {
    /**
     * Unique identifier for the crop
     * @type {string}
     * @memberof Crop
     */
    id: string;
    /**
     * Name of the crop
     * @type {string}
     * @memberof Crop
     */
    name: string;
    /**
     * Farms associated with this crop
     * @type {Array<Farm>}
     * @memberof Crop
     */
    farms: Array<Farm>;
}

/**
 * Check if a given object implements the Crop interface.
 */
export function instanceOfCrop(value: object): value is Crop {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('farms' in value) || value['farms'] === undefined) return false;
    return true;
}

export function CropFromJSON(json: any): Crop {
    return CropFromJSONTyped(json, false);
}

export function CropFromJSONTyped(json: any, ignoreDiscriminator: boolean): Crop {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'farms': ((json['farms'] as Array<any>).map(FarmFromJSON)),
    };
}

export function CropToJSON(json: any): Crop {
    return CropToJSONTyped(json, false);
}

export function CropToJSONTyped(value?: Crop | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'farms': ((value['farms'] as Array<any>).map(FarmToJSON)),
    };
}

