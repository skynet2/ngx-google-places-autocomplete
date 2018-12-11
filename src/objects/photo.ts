export interface Photo {
    height: number;
    html_attributions: string[];
    width: number;

    getUrl(request: PhotoRequest): string;
}

export class PhotoRequest {
    public maxWidth: number;
    public maxHeight: number;
}