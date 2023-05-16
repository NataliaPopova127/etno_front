import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	testRegionsRibbon = [
		{ "id": "1", "reg": "Республика Адыгея", "searchName": "Адыгея", "previewPath": "/assets/adygea_preview.jpg" },
		{ "id": "2", "reg": "Краснодарский край", "searchName": "Краснодарский край", "previewPath": "/assets/kr_krai_preview.jpg" }
		
	];
}
