import { Component } from '@angular/core';
import { Destaque } from "../destaque/destaque"

@Component({
	imports: [Destaque],
	selector: 'app-options',
	styleUrl: './options.css',
	templateUrl: './options.html',
})
export class Options {
	optionsList: string[] = [
		'/assets/options/todos os games.png',
		'/assets/options/ps plus.png',
		'/assets/options/free to play.png',
		'/assets/options/expasoes.png',
		'/assets/options/jogos melhorados.png',
		'/assets/options/ps vr2.png',
	]
}
