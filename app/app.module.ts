import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUIChartModule, 
    NativeScriptFormsModule,
    NativeScriptHttpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
