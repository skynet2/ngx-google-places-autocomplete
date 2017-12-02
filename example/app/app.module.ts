import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GooglePlaceModule } from "../../src/ngx-google-places-autocomplete.module";

@NgModule({
    imports: [BrowserModule, GooglePlaceModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}