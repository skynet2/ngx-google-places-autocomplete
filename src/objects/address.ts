import { AddressComponent } from "./addressComponent";
import { Geometry } from "./geometry";
import { Photo } from "./photo";
import { OpeningHours } from "./openingHours";
import { PlaceReview } from "./placeReview";

export class Address {
    address_components: AddressComponent[];
    adr_address: string;
    formatted_address: string;
    formatted_phone_number: string;
    geometry: Geometry;
    html_attributions: string[];
    icon: string;
    id: string;
    international_phone_number: string;
    name: string;
    opening_hours: OpeningHours;
    permanently_closed: boolean;
    photos: Photo[];
    place_id: string;
    price_level: number;
    rating: number;
    reviews: PlaceReview[];
    types: string[];
    url: string;
    utc_offset: number;
    vicinity: string;
    website: string;
}
