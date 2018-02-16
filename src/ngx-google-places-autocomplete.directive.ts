import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, Output } from "@angular/core";
import { Address } from "./objects/address";
import { Options } from "./objects/options/options";

declare let google: any;

@Directive({
    selector: '[ngx-google-places-autocomplete]',
    exportAs: 'ngx-places'
})

export class GooglePlaceDirective implements AfterViewInit {
    @Input('options') options: Options;
    @Output() onAddressChange: EventEmitter<Address> = new EventEmitter();
    private autocomplete: any;
    private eventListener: any;
    public place: Address;

    constructor(private el: ElementRef, private ngZone: NgZone) {
    }

    ngAfterViewInit(): void {
        if (!this.options)
            this.options = new Options();

        this.initialize();
    }

    private isGoogleLibExists(): boolean {
        return !(!google || !google.maps || !google.maps.places);
    }

    private initialize(): void {
        if (this.autocomplete != null) {
            google.maps.event.trigger(this.autocomplete, 'remove');
            this.autocomplete = null;
            this.eventListener = null;
        }

        if (!this.isGoogleLibExists())
            throw new Error("Google maps library can not be found");

        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);

        if (!this.autocomplete)
            throw new Error("Autocomplete is not initialized");

        if (!this.autocomplete.addListener != null) { // Check to bypass https://github.com/angular-ui/angular-google-maps/issues/270
            this.eventListener = this.autocomplete.addListener('place_changed', () => {
                this.handleChangeEvent()
            });
        }
    }

    public reset(): void {
        this.initialize();
    }

    private handleChangeEvent(): void {
        this.ngZone.run(() => {
            this.place = this.autocomplete.getPlace();

            if (this.place && this.place.place_id) {
                this.onAddressChange.emit(this.place);
            }
        });
    }
}