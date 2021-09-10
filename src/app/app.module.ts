import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsBasicComponent } from './05-components-basic/components-basic/components-basic.component';
import { DashboardHeroComponent } from './06-input-output/dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './07-component-with-dependencies/welcome/welcome.component';
import { BannerComponent } from './08-component-binding/banner/banner.component';
import { StoreComponent } from './10-components-with-async-service/store/store.component';
import { VerRegistroComponent } from './subscriptor/welcome/ver-registro/ver-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsBasicComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    StoreComponent,
    VerRegistroComponent
  ],
  imports: [
    BrowserModule,        
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
