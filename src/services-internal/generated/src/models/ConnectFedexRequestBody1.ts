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
 * A Fedex account information request body
 * @export
 * @interface ConnectFedexRequestBody1
 */
export interface ConnectFedexRequestBody1 {
    /**
     * Account number
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    accountNumber: string;
    /**
     * Address
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    address1: string;
    /**
     * Address
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    address2?: string;
    /**
     * The city
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    city: string;
    /**
     * The company
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    company?: string;
    /**
     * Country code
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    countryCode: string;
    /**
     * The email address
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    email: string;
    /**
     * First name
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    firstName: string;
    /**
     * Last name
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    lastName: string;
    /**
     * Phone number
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    phone: string;
    /**
     * Postal Code
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    postalCode: string;
    /**
     * State
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    state: string;
    /**
     * Nickname
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    nickname: string;
    /**
     * Boolean signaling agreement to the Fedex End User License Agreement
     * @type {boolean}
     * @memberof ConnectFedexRequestBody1
     */
    agreeToEula: boolean;
    /**
     * Meter number
     * @type {string}
     * @memberof ConnectFedexRequestBody1
     */
    meterNumber?: string;
}

export function ConnectFedexRequestBody1FromJSON(json: any): ConnectFedexRequestBody1 {
    return ConnectFedexRequestBody1FromJSONTyped(json, false);
}

export function ConnectFedexRequestBody1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectFedexRequestBody1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNumber': json['account_number'],
        'address1': json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'city': json['city'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'countryCode': json['country_code'],
        'email': json['email'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'phone': json['phone'],
        'postalCode': json['postal_code'],
        'state': json['state'],
        'nickname': json['nickname'],
        'agreeToEula': json['agree_to_eula'],
        'meterNumber': !exists(json, 'meter_number') ? undefined : json['meter_number'],
    };
}

export function ConnectFedexRequestBody1ToJSON(value?: ConnectFedexRequestBody1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_number': value.accountNumber,
        'address1': value.address1,
        'address2': value.address2,
        'city': value.city,
        'company': value.company,
        'country_code': value.countryCode,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone': value.phone,
        'postal_code': value.postalCode,
        'state': value.state,
        'nickname': value.nickname,
        'agree_to_eula': value.agreeToEula,
        'meter_number': value.meterNumber,
    };
}

