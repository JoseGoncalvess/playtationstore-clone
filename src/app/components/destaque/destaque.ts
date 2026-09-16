import { Component, Input } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-destaque',
	styleUrl: './destaque.css',
	templateUrl: './destaque.html',
})
export class Destaque {
	@Input() listItem: string[] = [];
}
