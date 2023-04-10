import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './core/routes/app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, CoreModule],
    providers: [Title],
    bootstrap: [AppComponent],
})
export class AppModule {}
