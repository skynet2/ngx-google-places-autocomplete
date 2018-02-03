import { LatLngBounds } from "./latLngBounds";
import { LatLng } from "./latLng";

export interface Geometry {
    location: LatLng;
    viewport: LatLngBounds;
}