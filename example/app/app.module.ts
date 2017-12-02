import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
    imports: [BrowserModule, GooglePlaceModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}