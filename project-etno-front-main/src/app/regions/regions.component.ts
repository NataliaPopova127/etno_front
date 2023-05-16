import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-regions',
	templateUrl: './regions.component.html',
	styleUrls: ['./regions.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class RegionsComponent {
	testRegionsRibbon = [
		{ "id": "1", "reg": "Республика Адыгея", "searchName": "Адыгея", "previewPath": "/assets/adygea_preview.jpg" },
		{ "id": "2", "reg": "Краснодарский край", "searchName": "Краснодарский край", "previewPath": "/assets/kr_krai_preview.jpg" }	
	];

	testRegions = this.testRegionsRibbon

	onSearchChange(event: any) {
		this.testRegions = this.testRegionsRibbon.filter(t => t.reg.toLowerCase().indexOf((event.target.value as string).toLowerCase()) > -1)
	}
}

