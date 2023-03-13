import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildComponent } from './child/child.component';

@NgModule({
	declarations: [AppComponent, ParentOneComponent, ParentTwoComponent, ChildComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatSlideToggleModule,
		FormsModule,
	],
	providers: [Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
