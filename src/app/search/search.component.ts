import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Item } from './item';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: Item[] = [];
  editHero: Item | undefined; // the hero currently being edited
  heroName = '';

  constructor(private heroesService: SearchService) {

//alert('SearchComponent');

  }

  @ViewChild('heroEditInput')
  set heroEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {
   
  }


  valuechange($event: Event): void {
    var t: HTMLInputElement = $event.target as HTMLInputElement;
    //alert(t.value);
    this.search(t.value);
 
  }
  search(searchTerm: string) {
    this.editHero = undefined;
    if (searchTerm) {
      this.heroesService
        .searchHeroes(searchTerm)
        .subscribe(heroes => (this.heroes = heroes));
    } else {
      
    }
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/