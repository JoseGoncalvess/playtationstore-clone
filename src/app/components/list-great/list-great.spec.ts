import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGreat } from './list-great';

describe('ListGreat', () => {
	let component: ListGreat;
	let fixture: ComponentFixture<ListGreat>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ListGreat],
		}).compileComponents();

		fixture = TestBed.createComponent(ListGreat);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
