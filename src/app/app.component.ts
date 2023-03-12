import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	title = 'Material+TW skeleton';

	mode: themeMode = 'dark';
	purpleSkin = false;

	constructor(@Inject(DOCUMENT) private document: Document, ts: Title) {
		ts.setTitle(this.title);
	}

	toggleDarkMode() {
		if (this.mode == 'light') {
			this.mode = 'dark';
			this.document.body.classList.add(this.mode);
		} else {
			this.document.body.classList.remove(this.mode);
			this.mode = 'light';
		}
	}

	togglePurpleSkin() {
		if (this.purpleSkin) {
			this.document.body.classList.add('skin-purple');
		} else {
			this.document.body.classList.remove('skin-purple');
		}
	}
}

type themeMode = 'dark' | 'light';
