export interface Location {
    latitude: number;
    longitude: number;
}

export interface LocationOnSegment {
    latitude: number;
    longitude: number;
}

export interface AccessPoint {
    access_point_type: string;
    location: Location;
    location_on_segment: LocationOnSegment;
    place_id: string;
    segment_position: number;
    unsuitable_travel_modes: any[];
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface Northeast {
    lat: number;
    lng: number;
}

export interface Southwest {
    lat: number;
    lng: number;
}

export interface Bounds {
    northeast: Northeast;
    southwest: Southwest;
}

export interface Location2 {
    lat: string;
    lng: string;
}

export interface Northeast2 {
    lat: number;
    lng: number;
}

export interface Southwest2 {
    lat: number;
    lng: number;
}

export interface Viewport {
    northeast: Northeast2;
    southwest: Southwest2;
}

export interface Geometry {
    bounds: Bounds;
    location: Location2;
    location_type: string;
    viewport: Viewport;
}

export interface Result {
    access_points: AccessPoint[];
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: string[];
}

export interface RootObject {
    results: Result[];
    status: string;
}

