import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatMenuModule, MatGridListModule, 
         MatSidenavModule, MatDialogModule, MatToolbarModule, 
         MatButtonModule, MatCardModule, MatFormFieldModule,
         MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { firebaseConfig } from 'environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { DialogBookComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent, DialogBookComponent]
})
export class AppModule { }
