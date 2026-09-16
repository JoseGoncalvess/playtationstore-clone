import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Banner } from './components/banner/banner';
import { Destaque } from './components/destaque/destaque';
import { ListGreat } from './components/list-great/list-great';
import { Options } from './components/options/options';
import { Footer } from './components/footer/footer'

@Component({
  selector: 'app-root',
  imports: [Header, Banner, Destaque, ListGreat, Options, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ps_store');
  protected lisDestaqueGames: string[] = [
    '/assets/destaque/2k27.png',
    '/assets/destaque/Call of Duty.png',
    '/assets/destaque/FC27.png',
    '/assets/destaque/Grand Theft Auto VI.png',
    '/assets/destaque/HALO.png',
    '/assets/destaque/Onimusha_Way_of_the_Sword.png',
    '/assets/destaque/SILENT HILL- Townfall.png',
    '/assets/destaque/The_blood_of_Dawnwalker.png',
  ];
}
