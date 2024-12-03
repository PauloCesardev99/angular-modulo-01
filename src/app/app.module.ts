import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  //Aqui é onde os componentes estão declarados
  declarations: [
    AppComponent,
  ],
  //aqui estão os modulos importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
