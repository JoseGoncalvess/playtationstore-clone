import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { ShowList } from './show-list/show-list';

const asset = (name: string) => `/assets/destaque/${name}`;

@Component({
	imports: [ShowList],
	selector: 'app-list-great',
	styleUrl: './list-great.css',
	templateUrl: './list-great.html',
})
export class ListGreat {
	protected bestGames: Game[] = [
		{ title: 'Grand Theft Auto VI', description: 'PS5', value: 'R$ 349,90', img: asset('Grand Theft Auto VI.png') },
		{ title: 'EA SPORTS FC 27', description: 'PS5', value: 'R$ 299,90', img: asset('FC27.png') },
		{ title: 'Marvel’s Wolverine', description: 'PS5', value: 'R$ 349,90', img: asset('Onimusha_Way_of_the_Sword.png') },
		{ title: 'Fortnite', description: 'Gratuito', value: 'Gratuito', img: asset('The_blood_of_Dawnwalker.png') },
		{ title: 'NBA 2K27', description: 'PS5', value: 'R$ 349,90', img: asset('2k27.png') },
		{ title: 'Call of Duty', description: 'PS5', value: 'R$ 299,90', img: asset('Call of Duty.png') },
	];

	protected newGames: Game[] = [
		this.bestGames[2],
		this.bestGames[4],
		{ title: 'Onimusha: Way of the Sword', description: 'PS5', value: 'R$ 349,90', img: asset('Onimusha_Way_of_the_Sword.png') },
		{ title: 'The Blood of Dawnwalker', description: 'PS5', value: 'R$ 299,90', img: asset('The_blood_of_Dawnwalker.png') },
		{ title: 'Halloween: The Game', description: 'PS5', value: 'R$ 229,90', img: asset('SILENT HILL- Townfall.png') },
		{ title: 'Valheim', description: 'PS4', value: 'R$ 149,90', img: asset('HALO.png') },
	];

	protected preOrders: Game[] = [
		{ ...this.bestGames[0], title: 'Grand Theft Auto VI: Ultimate Edition', value: 'R$ 449,90' },
		{ ...this.bestGames[1], title: 'EA SPORTS FC 27 Ultimate Edition', value: 'R$ 399,90' },
		{ ...this.bestGames[1], title: 'EA SPORTS FC 27 Standard Edition', value: 'R$ 349,90' },
		{ ...this.bestGames[0] },
		{ title: 'CONTROL: Resonant Digital Deluxe Edition', description: 'PS5', value: 'R$ 299,90', img: asset('SILENT HILL- Townfall.png') },
		{ title: 'Call of Duty: Modern Warfare III', description: 'PS5', value: 'R$ 349,90', img: asset('Call of Duty.png') },
	];
}
