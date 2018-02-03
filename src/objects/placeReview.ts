export interface PlaceReview {
    aspects: PlaceAspectRating[];
    author_name: string;
    author_url: string;
    language: string;
    text: string;
}

export interface PlaceAspectRating {
    rating: number;
    type: string;
}