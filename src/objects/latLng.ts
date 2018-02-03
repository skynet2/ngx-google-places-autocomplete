export interface LatLng {
    /** Comparison function. */
    equals(other: LatLng): boolean;
    /** Returns the latitude in degrees. */
    lat(): number;
    /** Returns the longitude in degrees. */
    lng(): number;
    /** Converts to string representation. */
    toString(): string;
    /** Returns a string of the form "lat,lng". We round the lat/lng values to 6 decimal places by default. */
    toUrlValue(precision?: number): string;
    /** Converts to JSON representation. This function is intended to be used via JSON.stringify. */
    toJSON(): LatLngLiteral;
}
export type LatLngLiteral = { lat: number; lng: number }
export type LatLngBoundsLiteral = { east: number; north: number; south: number; west: number }