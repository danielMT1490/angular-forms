import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importamos el modulo de ReactiveFroms para trabajar con FormsControl
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    //para trabajr con formControl
    ReactiveFormsModule,
    // para trabajar con NgModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
