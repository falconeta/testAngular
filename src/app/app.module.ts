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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PostComponent,
    ErrorPageComponent,
    ModalPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReadWriteService, MessageService,
    RequestService, AggiungiAggregatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
