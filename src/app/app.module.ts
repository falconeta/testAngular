import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReadWriteService } from './services/read-write.service';
import { BodyComponent } from './body/body.component';
import { MessageService } from './services/message.service';
import { RequestService } from './services/request.service';
import { PostComponent } from './post/post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AggiungiAggregatoService } from './services/aggiungi-aggregato.service';
import { ModalPostComponent } from './modal-post/modal-post.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { GeolocationService } from './services/geolocation.service';
import { LocalStorageService } from './services/local-storage.service';
import { GameComponent } from './game/game.component';
import { ElementService } from './services/element.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PostComponent,
    ErrorPageComponent,
    ModalPostComponent,
    GeolocationComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReadWriteService, MessageService,
    RequestService, AggiungiAggregatoService,
    GeolocationService, LocalStorageService,
    ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
