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
  searchItem = '';

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

  search() {
    var searchTerm = this.searchItem;
    //alert(searchTerm);


    const myObserver = {
      next: () => alert('Observer got a next value: '),
      error: () => alert('Observer got an error: '),
      complete: () => alert('Observer got a complete notification'),
    };
    


    this.editHero = undefined;
    if (searchTerm) {
      this.heroesService
        .searchHeroes(searchTerm)
        //.subscribe(myObserver);
        .subscribe((heroes) => this.set(heroes) );

    } else {
      
    }
  }
  set(items: Item[]) {
    alert(
      this.searchItem + " ### " + items[1].name 
      );
  }

  hide()
  {
    alert('hide');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/