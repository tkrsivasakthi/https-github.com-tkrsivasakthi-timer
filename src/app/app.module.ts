import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateComponent } from './create/create.component';
import { RetriveComponent } from './retrive/retrive.component';
import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CreateComponent, RetriveComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
