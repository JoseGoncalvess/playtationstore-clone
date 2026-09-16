import { Component, Input } from '@angular/core';
import { Game } from '../../../models/game';

@Component({
	imports: [],
	selector: 'app-show-list',
	styleUrl: './show-list.css',
	templateUrl: './show-list.html',
})
export class ShowList {
	@Input() games: Game[] = [];
	@Input() title = '';
}
