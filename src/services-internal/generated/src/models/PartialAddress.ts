/* tslint:disable */
/* eslint-disable */
/**
 * ShipEngine API
 * ShipEngine\'s easy-to-use REST API lets you manage all of your shipping needs without worrying about the complexities of different carrier APIs and protocols. We handle all the heavy lifting so you can focus on providing a first-class shipping experience for your customers at the best possible prices.  Each of ShipEngine\'s features can be used by itself or in conjunction with each other to build powerful shipping functionality into your application or service.  ## Getting Started If you\'re new to REST APIs then be sure to read our [introduction to REST](https://www.shipengine.com/docs/rest/) to understand the basics.  Learn how to [authenticate yourself to ShipEngine](https://www.shipengine.com/docs/auth/), and then use our [sandbox environment](https://www.shipengine.com/docs/sandbox/) to kick the tires and get familiar with our API. If you run into any problems, then be sure to check the [error handling guide](https://www.shipengine.com/docs/errors/) for tips.  Here are some step-by-step **tutorials** to get you started:    - [Learn how to create your first shipping label](https://www.shipengine.com/docs/labels/create-a-label/)   - [Calculate shipping costs and compare rates across carriers](https://www.shipengine.com/docs/rates/)   - [Track packages on-demand or in real time](https://www.shipengine.com/docs/tracking/)   - [Validate mailing addresses anywhere on Earth](https://www.shipengine.com/docs/addresses/validation/)   ## Shipping Labels for Every Major Carrier ShipEngine makes it easy to [create shipping labels for any carrier](https://www.shipengine.com/docs/labels/create-a-label/) and [download them](https://www.shipengine.com/docs/labels/downloading/) in a [variety of file formats](https://www.shipengine.com/docs/labels/formats/). You can even customize labels with your own [messages](https://www.shipengine.com/docs/labels/messages/) and [images](https://www.shipengine.com/docs/labels/branding/).   ## Real-Time Package Tracking With ShipEngine you can [get the current status of a package](https://www.shipengine.com/docs/tracking/) or [subscribe to real-time tracking updates](https://www.shipengine.com/docs/tracking/webhooks/) via webhooks. You can also create [custimized tracking pages](https://www.shipengine.com/docs/tracking/branded-tracking-page/) with your own branding so your customers will always know where their package is.   ## Compare Shipping Costs Across Carriers Make sure you ship as cost-effectively as possible by [comparing rates across carriers](https://www.shipengine.com/docs/rates/get-shipment-rates/) using the ShipEngine Rates API. Or if you don\'t know the full shipment details yet, then you can [get rate estimates](https://www.shipengine.com/docs/rates/estimate/) with limited address info.   ## Worldwide Address Validation ShipEngine supports [address validation](https://www.shipengine.com/docs/addresses/validation/) for virtually [every country on Earth](https://www.shipengine.com/docs/addresses/validation/countries/), including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others. 
 *
 * The version of the OpenAPI document: 1.1.202010261510
 * Contact: sales@shipengine.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A complete or partial mailing address.
 * @export
 * @interface PartialAddress
 */
export interface PartialAddress {
    /**
     * The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.
     * @type {string}
     * @memberof PartialAddress
     */
    name?: string;
    /**
     * The phone number of a contact person at this address.  The format of this phone number varies depending on the country.
     * @type {string}
     * @memberof PartialAddress
     */
    phone?: string;
    /**
     * If this is a business address, then the company name should be specified here.
     * @type {string}
     * @memberof PartialAddress
     */
    companyName?: string | null;
    /**
     * The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.
     * @type {string}
     * @memberof PartialAddress
     */
    addressLine1?: string;
    /**
     * The second line of the street address.  For some addresses, this line may not be needed.
     * @type {string}
     * @memberof PartialAddress
     */
    addressLine2?: string | null;
    /**
     * The third line of the street address.  For some addresses, this line may not be needed.
     * @type {string}
     * @memberof PartialAddress
     */
    addressLine3?: string | null;
    /**
     * The name of the city or locality
     * @type {string}
     * @memberof PartialAddress
     */
    cityLocality?: string;
    /**
     * The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.
     * @type {string}
     * @memberof PartialAddress
     */
    stateProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof PartialAddress
     */
    postalCode?: string;
    /**
     * The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
     * @type {string}
     * @memberof PartialAddress
     */
    countryCode?: string;
    /**
     * Indicates whether this is a residential address.
     * @type {string}
     * @memberof PartialAddress
     */
    addressResidentialIndicator?: string;
}

export function PartialAddressFromJSON(json: any): PartialAddress {
    return PartialAddressFromJSONTyped(json, false);
}

export function PartialAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'companyName': !exists(json, 'company_name') ? undefined : json['company_name'],
        'addressLine1': !exists(json, 'address_line1') ? undefined : json['address_line1'],
        'addressLine2': !exists(json, 'address_line2') ? undefined : json['address_line2'],
        'addressLine3': !exists(json, 'address_line3') ? undefined : json['address_line3'],
        'cityLocality': !exists(json, 'city_locality') ? undefined : json['city_locality'],
        'stateProvince': !exists(json, 'state_province') ? undefined : json['state_province'],
        'postalCode': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'countryCode': !exists(json, 'country_code') ? undefined : json['country_code'],
        'addressResidentialIndicator': !exists(json, 'address_residential_indicator') ? undefined : json['address_residential_indicator'],
    };
}

export function PartialAddressToJSON(value?: PartialAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'phone': value.phone,
        'company_name': value.companyName,
        'address_line1': value.addressLine1,
        'address_line2': value.addressLine2,
        'address_line3': value.addressLine3,
        'city_locality': value.cityLocality,
        'state_province': value.stateProvince,
        'postal_code': value.postalCode,
        'country_code': value.countryCode,
        'address_residential_indicator': value.addressResidentialIndicator,
    };
}

