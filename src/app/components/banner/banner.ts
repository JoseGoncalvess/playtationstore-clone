import { Component, Input } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-banner',
	styleUrl: './banner.css',
	templateUrl: './banner.html',
})
export class Banner {
	@Input() description: string = "";
	@Input() title: string = '';
	@Input() banner: string = "";
	@Input() alterDescript: string = "";
}
