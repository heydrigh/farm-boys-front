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
 * @interface Producer
 */
export interface Producer {
    /**
     * Unique identifier for the producer
     * @type {string}
     * @memberof Producer
     */
    id: string;
    /**
     * CPF or CNPJ of the producer
     * @type {string}
     * @memberof Producer
     */
    cpfCnpj: string;
    /**
     * Name of the producer
     * @type {string}
     * @memberof Producer
     */
    name: string;
    /**
     * Farm associated with the producer
     * @type {Farm}
     * @memberof Producer
     */
    farm: Farm;
}

/**
 * Check if a given object implements the Producer interface.
 */
export function instanceOfProducer(value: object): value is Producer {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('cpfCnpj' in value) || value['cpfCnpj'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('farm' in value) || value['farm'] === undefined) return false;
    return true;
}

export function ProducerFromJSON(json: any): Producer {
    return ProducerFromJSONTyped(json, false);
}

export function ProducerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Producer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'cpfCnpj': json['cpfCnpj'],
        'name': json['name'],
        'farm': FarmFromJSON(json['farm']),
    };
}

export function ProducerToJSON(json: any): Producer {
    return ProducerToJSONTyped(json, false);
}

export function ProducerToJSONTyped(value?: Producer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'cpfCnpj': value['cpfCnpj'],
        'name': value['name'],
        'farm': FarmToJSON(value['farm']),
    };
}

