import { AddressComponent } from "./addressComponent";
import { Geometry } from "./geometry";

export class Address {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    id: string;
    name: string;
    place_id: string;
    reference: string;
    scope: string;
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    html_attributions: any[];

}
