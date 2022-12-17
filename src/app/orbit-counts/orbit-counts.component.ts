import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

 	// findUnique(arr: any) : any {
	// 	let distinct = []
	// 	for (let i=0; i<arr.length; i++){
	// 		distinct.push(arr[i].type)
	// 	  }
	// 	console.log(distinct.sort())
		
	// 	let unique = [];
	// 	for (let i = 0; i < distinct.length; i++) {
	// 		if (distinct[i] !== distinct[i+1]) {
	// 			unique.push(distinct[i]);
	// 		}
	// 		console.log(unique)
	// 	}
	// 	return unique;
	// }

	findUnique(satelliltes: any) : any {
		let distinct = []
		for (let i=0; i<this.satellites.length; i++){
			distinct.push(this.satellites[i].type)
		  }
		console.log(distinct.sort())
		
		let unique = [];
		for (let i = 0; i < distinct.length; i++) {
			if (distinct[i] !== distinct[i+1]) {
				unique.push(distinct[i]);
			}
			console.log(unique)
		}
		return unique;
	}

};
