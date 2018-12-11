import {Component, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from "../../src/ngx-google-places-autocomplete.directive";
import {ComponentRestrictions} from "../../src/objects/options/componentRestrictions";
import {Address} from "../../src/objects/address";
import {AddressComponent} from "../../src/objects/addressComponent";

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
        let x = this.getComponentByType(address,"street_number");
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
    }

    public getComponentByType(address: Address, type: string): AddressComponent {
        if(!type)
            return null;

        if (!address || !address.address_components || address.address_components.length == 0)
            return null;

        type = type.toLowerCase();

        for (let comp of address.address_components) {
            if(!comp.types || comp.types.length == 0)
                continue;

            if(comp.types.findIndex(x => x.toLowerCase() == type) > -1)
                return comp;
        }

        return null;
    }
    public changeConfig() {
        this.places.options.componentRestrictions = new ComponentRestrictions({
            country: "UA"
        });

        this.places.reset();
    }
}