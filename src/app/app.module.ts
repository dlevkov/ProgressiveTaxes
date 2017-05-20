import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdInputModule, MdButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ProgressiveTaxComponent } from './progressive-tax/progressive-tax.component';
import { ProgressiveService } from './progressive-tax/progressive.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProgressiveTaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    ReactiveFormsModule
  ],
  providers: [ProgressiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
