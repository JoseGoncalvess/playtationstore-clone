import { Component } from '@angular/core';
;

@Component({
	imports: [],
	selector: 'app-header',
	styleUrl: './header.css',
	templateUrl: './header.html',
})
export class Header {
	protected menus: string[] = ["Novidades",
		"Coleções",
		"Ofertas",
		"Assinaturas",
		"Navegar"];
	protected logo: string = "/assets/ps-logo.png";

}
