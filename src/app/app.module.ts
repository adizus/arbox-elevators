import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {OpenCloseComponent} from './open-close.component';
import {ElevatorComponent} from './elevator/elevator.component';
import {CallButtonComponent} from './call-button/call-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    ElevatorComponent,
    CallButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
