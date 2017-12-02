import { Component, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from "../../src/ngx-google-places-autocomplete.directive";
import { ComponentRestrictions } from "../../src/objects/options/componentRestrictions";

@Component({
    selector: 'my-app',
    template: `<input ngx-google-places-autocomplete #places="ngx-places"/><button (click)="changeConfig()">Change Config</button><button (click)="search()">Execute search</button>`,
})
export class AppComponent {
    @ViewChild('places') places: GooglePlaceDirective;

    public changeConfig() {
        this.places.options.componentRestrictions = new ComponentRestrictions({
            country: "UA"
        });

        this.places.reset();
    }
}