import { Component, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from "../../src/ngx-google-places-autocomplete.directive";
import { ComponentRestrictions } from "../../src/objects/options/componentRestrictions";
import { Address } from "../../src/objects/address";

@Component({
    selector: 'my-app',
    template: `<form><input ngx-google-places-autocomplete #places="ngx-places" (onAddressChange)="onChange($event)" />
    <button (click)="changeConfig()">Change Config</button>
    <button (click)="search()">Execute search</button></form>`,
})
export class AppComponent {
    @ViewChild('places') places: GooglePlaceDirective;

    public onChange(address: Address) {
        if(address.photos && address.photos.length > 0){
            console.dir(address.photos[0].getUrl({maxHeight:500,maxWidth:500}));
        }
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
    }

    public changeConfig() {
        this.places.options.componentRestrictions = new ComponentRestrictions({
            country: "UA"
        });

        this.places.reset();
    }
}