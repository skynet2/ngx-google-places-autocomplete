import { NgModule } from "@angular/core";
import { GooglePlaceDirective } from "./ngx-google-places-autocomplete.directive";

@NgModule({
    declarations: [GooglePlaceDirective],
    exports: [GooglePlaceDirective]
})

export class GooglePlaceModule {
}