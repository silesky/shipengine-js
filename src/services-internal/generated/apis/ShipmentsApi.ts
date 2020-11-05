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


import * as runtime from '../runtime';
import {
    CreateShipmentsRequestBody,
    CreateShipmentsRequestBodyFromJSON,
    CreateShipmentsRequestBodyToJSON,
    CreateShipmentsResponseBody,
    CreateShipmentsResponseBodyFromJSON,
    CreateShipmentsResponseBodyToJSON,
    ErrorResponseBody,
    ErrorResponseBodyFromJSON,
    ErrorResponseBodyToJSON,
    GetShipmentByExternalIdResponseBody,
    GetShipmentByExternalIdResponseBodyFromJSON,
    GetShipmentByExternalIdResponseBodyToJSON,
    GetShipmentByIdResponseBody,
    GetShipmentByIdResponseBodyFromJSON,
    GetShipmentByIdResponseBodyToJSON,
    ListShipmentErrorsResponseBody,
    ListShipmentErrorsResponseBodyFromJSON,
    ListShipmentErrorsResponseBodyToJSON,
    ListShipmentRatesResponseBody,
    ListShipmentRatesResponseBodyFromJSON,
    ListShipmentRatesResponseBodyToJSON,
    ListShipmentsResponseBody,
    ListShipmentsResponseBodyFromJSON,
    ListShipmentsResponseBodyToJSON,
    ParseShipmentRequestBody,
    ParseShipmentRequestBodyFromJSON,
    ParseShipmentRequestBodyToJSON,
    ParseShipmentResponseBody,
    ParseShipmentResponseBodyFromJSON,
    ParseShipmentResponseBodyToJSON,
    ShipmentStatus,
    ShipmentStatusFromJSON,
    ShipmentStatusToJSON,
    ShipmentsSortBy,
    ShipmentsSortByFromJSON,
    ShipmentsSortByToJSON,
    SortDir,
    SortDirFromJSON,
    SortDirToJSON,
    TagShipmentResponseBody,
    TagShipmentResponseBodyFromJSON,
    TagShipmentResponseBodyToJSON,
    UpdateShipmentRequestBody,
    UpdateShipmentRequestBodyFromJSON,
    UpdateShipmentRequestBodyToJSON,
    UpdateShipmentResponseBody,
    UpdateShipmentResponseBodyFromJSON,
    UpdateShipmentResponseBodyToJSON,
} from '../models';

export interface CancelShipmentsRequest {
    shipmentId: string;
}

export interface CreateShipmentsRequest {
    createShipmentsRequestBody: CreateShipmentsRequestBody;
}

export interface GetShipmentByExternalIdRequest {
    externalShipmentId: string;
}

export interface GetShipmentByIdRequest {
    shipmentId: string;
}

export interface ListShipmentErrorsRequest {
    shipmentId: string;
    page?: number;
    pagesize?: number;
}

export interface ListShipmentRatesRequest {
    shipmentId: string;
    createdAtStart?: Date;
}

export interface ListShipmentsRequest {
    shipmentStatus?: ShipmentStatus;
    batchId?: string;
    tag?: string;
    createdAtStart?: Date;
    createdAtEnd?: Date;
    modifiedAtStart?: Date;
    modifiedAtEnd?: Date;
    page?: number;
    pageSize?: number;
    salesOrderId?: string;
    sortDir?: SortDir;
    sortBy?: ShipmentsSortBy;
}

export interface ParseShipmentRequest {
    parseShipmentRequestBody: ParseShipmentRequestBody;
}

export interface TagShipmentRequest {
    shipmentId: string;
    tagName: string;
}

export interface UntagShipmentRequest {
    shipmentId: string;
    tagName: string;
}

export interface UpdateShipmentRequest {
    shipmentId: string;
    updateShipmentRequestBody: UpdateShipmentRequestBody;
}

/**
 * 
 */
export class ShipmentsApi extends runtime.BaseAPI {

    /**
     * Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled would remove it from this process 
     * Cancel a Shipment
     */
    async cancelShipmentsRaw(requestParameters: CancelShipmentsRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling cancelShipments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}/cancel`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled would remove it from this process 
     * Cancel a Shipment
     */
    async cancelShipments(requestParameters: CancelShipmentsRequest): Promise<string> {
        const response = await this.cancelShipmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create one or multiple shipments.
     * Create Shipments
     */
    async createShipmentsRaw(requestParameters: CreateShipmentsRequest): Promise<runtime.ApiResponse<CreateShipmentsResponseBody>> {
        if (requestParameters.createShipmentsRequestBody === null || requestParameters.createShipmentsRequestBody === undefined) {
            throw new runtime.RequiredError('createShipmentsRequestBody','Required parameter requestParameters.createShipmentsRequestBody was null or undefined when calling createShipments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateShipmentsRequestBodyToJSON(requestParameters.createShipmentsRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateShipmentsResponseBodyFromJSON(jsonValue));
    }

    /**
     * Create one or multiple shipments.
     * Create Shipments
     */
    async createShipments(requestParameters: CreateShipmentsRequest): Promise<CreateShipmentsResponseBody> {
        const response = await this.createShipmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Query Shipments created using your own custom ID convention using this endpint
     * Get Shipment By External ID
     */
    async getShipmentByExternalIdRaw(requestParameters: GetShipmentByExternalIdRequest): Promise<runtime.ApiResponse<GetShipmentByExternalIdResponseBody>> {
        if (requestParameters.externalShipmentId === null || requestParameters.externalShipmentId === undefined) {
            throw new runtime.RequiredError('externalShipmentId','Required parameter requestParameters.externalShipmentId was null or undefined when calling getShipmentByExternalId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/external_shipment_id/{external_shipment_id}`.replace(`{${"external_shipment_id"}}`, encodeURIComponent(String(requestParameters.externalShipmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetShipmentByExternalIdResponseBodyFromJSON(jsonValue));
    }

    /**
     * Query Shipments created using your own custom ID convention using this endpint
     * Get Shipment By External ID
     */
    async getShipmentByExternalId(requestParameters: GetShipmentByExternalIdRequest): Promise<GetShipmentByExternalIdResponseBody> {
        const response = await this.getShipmentByExternalIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get an individual shipment based on its ID
     * Get Shipment By ID
     */
    async getShipmentByIdRaw(requestParameters: GetShipmentByIdRequest): Promise<runtime.ApiResponse<GetShipmentByIdResponseBody>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling getShipmentById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetShipmentByIdResponseBodyFromJSON(jsonValue));
    }

    /**
     * Get an individual shipment based on its ID
     * Get Shipment By ID
     */
    async getShipmentById(requestParameters: GetShipmentByIdRequest): Promise<GetShipmentByIdResponseBody> {
        const response = await this.getShipmentByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * If there are no errors associated with this shipment then the API will return a 404 Not Found response to indicate that no errors are associated with the request 
     * Get Shipment Errors
     */
    async listShipmentErrorsRaw(requestParameters: ListShipmentErrorsRequest): Promise<runtime.ApiResponse<ListShipmentErrorsResponseBody>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling listShipmentErrors.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pagesize !== undefined) {
            queryParameters['pagesize'] = requestParameters.pagesize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}/errors`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListShipmentErrorsResponseBodyFromJSON(jsonValue));
    }

    /**
     * If there are no errors associated with this shipment then the API will return a 404 Not Found response to indicate that no errors are associated with the request 
     * Get Shipment Errors
     */
    async listShipmentErrors(requestParameters: ListShipmentErrorsRequest): Promise<ListShipmentErrorsResponseBody> {
        const response = await this.listShipmentErrorsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Rates for the shipment information associated with the shipment ID
     * Get Shipment Rates
     */
    async listShipmentRatesRaw(requestParameters: ListShipmentRatesRequest): Promise<runtime.ApiResponse<ListShipmentRatesResponseBody>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling listShipmentRates.');
        }

        const queryParameters: any = {};

        if (requestParameters.createdAtStart !== undefined) {
            queryParameters['created_at_start'] = (requestParameters.createdAtStart as any).toISOString();
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}/rates`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListShipmentRatesResponseBodyFromJSON(jsonValue));
    }

    /**
     * Get Rates for the shipment information associated with the shipment ID
     * Get Shipment Rates
     */
    async listShipmentRates(requestParameters: ListShipmentRatesRequest): Promise<ListShipmentRatesResponseBody> {
        const response = await this.listShipmentRatesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get list of Shipments
     * List Shipments
     */
    async listShipmentsRaw(requestParameters: ListShipmentsRequest): Promise<runtime.ApiResponse<ListShipmentsResponseBody>> {
        const queryParameters: any = {};

        if (requestParameters.shipmentStatus !== undefined) {
            queryParameters['shipment_status'] = requestParameters.shipmentStatus;
        }

        if (requestParameters.batchId !== undefined) {
            queryParameters['batch_id'] = requestParameters.batchId;
        }

        if (requestParameters.tag !== undefined) {
            queryParameters['tag'] = requestParameters.tag;
        }

        if (requestParameters.createdAtStart !== undefined) {
            queryParameters['created_at_start'] = (requestParameters.createdAtStart as any).toISOString();
        }

        if (requestParameters.createdAtEnd !== undefined) {
            queryParameters['created_at_end'] = (requestParameters.createdAtEnd as any).toISOString();
        }

        if (requestParameters.modifiedAtStart !== undefined) {
            queryParameters['modified_at_start'] = (requestParameters.modifiedAtStart as any).toISOString();
        }

        if (requestParameters.modifiedAtEnd !== undefined) {
            queryParameters['modified_at_end'] = (requestParameters.modifiedAtEnd as any).toISOString();
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.salesOrderId !== undefined) {
            queryParameters['sales_order_id'] = requestParameters.salesOrderId;
        }

        if (requestParameters.sortDir !== undefined) {
            queryParameters['sort_dir'] = requestParameters.sortDir;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sort_by'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListShipmentsResponseBodyFromJSON(jsonValue));
    }

    /**
     * Get list of Shipments
     * List Shipments
     */
    async listShipments(requestParameters: ListShipmentsRequest): Promise<ListShipmentsResponseBody> {
        const response = await this.listShipmentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people\'s names, addresses, package weights and dimensions, insurance and delivery requirements, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that\'s used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.  > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
     * Parse shipping info
     */
    async parseShipmentRaw(requestParameters: ParseShipmentRequest): Promise<runtime.ApiResponse<ParseShipmentResponseBody>> {
        if (requestParameters.parseShipmentRequestBody === null || requestParameters.parseShipmentRequestBody === undefined) {
            throw new runtime.RequiredError('parseShipmentRequestBody','Required parameter requestParameters.parseShipmentRequestBody was null or undefined when calling parseShipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/recognize`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ParseShipmentRequestBodyToJSON(requestParameters.parseShipmentRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ParseShipmentResponseBodyFromJSON(jsonValue));
    }

    /**
     * The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people\'s names, addresses, package weights and dimensions, insurance and delivery requirements, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine\'s shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that\'s used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.  > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 
     * Parse shipping info
     */
    async parseShipment(requestParameters: ParseShipmentRequest): Promise<ParseShipmentResponseBody> {
        const response = await this.parseShipmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Add a tag to the shipment object
     * Add Tag to Shipment
     */
    async tagShipmentRaw(requestParameters: TagShipmentRequest): Promise<runtime.ApiResponse<TagShipmentResponseBody>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling tagShipment.');
        }

        if (requestParameters.tagName === null || requestParameters.tagName === undefined) {
            throw new runtime.RequiredError('tagName','Required parameter requestParameters.tagName was null or undefined when calling tagShipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}/tags/{tag_name}`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))).replace(`{${"tag_name"}}`, encodeURIComponent(String(requestParameters.tagName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagShipmentResponseBodyFromJSON(jsonValue));
    }

    /**
     * Add a tag to the shipment object
     * Add Tag to Shipment
     */
    async tagShipment(requestParameters: TagShipmentRequest): Promise<TagShipmentResponseBody> {
        const response = await this.tagShipmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Remove an existing tag from the Shipment object
     * Remove Tag from Shipment
     */
    async untagShipmentRaw(requestParameters: UntagShipmentRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling untagShipment.');
        }

        if (requestParameters.tagName === null || requestParameters.tagName === undefined) {
            throw new runtime.RequiredError('tagName','Required parameter requestParameters.tagName was null or undefined when calling untagShipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}/tags/{tag_name}`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))).replace(`{${"tag_name"}}`, encodeURIComponent(String(requestParameters.tagName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Remove an existing tag from the Shipment object
     * Remove Tag from Shipment
     */
    async untagShipment(requestParameters: UntagShipmentRequest): Promise<string> {
        const response = await this.untagShipmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a shipment object based on its ID
     * Update Shipment By ID
     */
    async updateShipmentRaw(requestParameters: UpdateShipmentRequest): Promise<runtime.ApiResponse<UpdateShipmentResponseBody>> {
        if (requestParameters.shipmentId === null || requestParameters.shipmentId === undefined) {
            throw new runtime.RequiredError('shipmentId','Required parameter requestParameters.shipmentId was null or undefined when calling updateShipment.');
        }

        if (requestParameters.updateShipmentRequestBody === null || requestParameters.updateShipmentRequestBody === undefined) {
            throw new runtime.RequiredError('updateShipmentRequestBody','Required parameter requestParameters.updateShipmentRequestBody was null or undefined when calling updateShipment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["API-Key"] = this.configuration.apiKey("API-Key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v1/shipments/{shipment_id}`.replace(`{${"shipment_id"}}`, encodeURIComponent(String(requestParameters.shipmentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateShipmentRequestBodyToJSON(requestParameters.updateShipmentRequestBody),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateShipmentResponseBodyFromJSON(jsonValue));
    }

    /**
     * Update a shipment object based on its ID
     * Update Shipment By ID
     */
    async updateShipment(requestParameters: UpdateShipmentRequest): Promise<UpdateShipmentResponseBody> {
        const response = await this.updateShipmentRaw(requestParameters);
        return await response.value();
    }

}