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
 * A purchase label without shipment resource
 * @export
 * @interface PurchaseLabelWithoutShipment1
 */
export interface PurchaseLabelWithoutShipment1 {
    /**
     * 
     * @type {string}
     * @memberof PurchaseLabelWithoutShipment1
     */
    validateAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseLabelWithoutShipment1
     */
    labelLayout?: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseLabelWithoutShipment1
     */
    labelFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseLabelWithoutShipment1
     */
    labelDownloadType?: string;
    /**
     * The display format that the label should be shown in.
     * @type {string}
     * @memberof PurchaseLabelWithoutShipment1
     */
    displayScheme?: string;
}

export function PurchaseLabelWithoutShipment1FromJSON(json: any): PurchaseLabelWithoutShipment1 {
    return PurchaseLabelWithoutShipment1FromJSONTyped(json, false);
}

export function PurchaseLabelWithoutShipment1FromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseLabelWithoutShipment1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validateAddress': !exists(json, 'validate_address') ? undefined : json['validate_address'],
        'labelLayout': !exists(json, 'label_layout') ? undefined : json['label_layout'],
        'labelFormat': !exists(json, 'label_format') ? undefined : json['label_format'],
        'labelDownloadType': !exists(json, 'label_download_type') ? undefined : json['label_download_type'],
        'displayScheme': !exists(json, 'display_scheme') ? undefined : json['display_scheme'],
    };
}

export function PurchaseLabelWithoutShipment1ToJSON(value?: PurchaseLabelWithoutShipment1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validate_address': value.validateAddress,
        'label_layout': value.labelLayout,
        'label_format': value.labelFormat,
        'label_download_type': value.labelDownloadType,
        'display_scheme': value.displayScheme,
    };
}

