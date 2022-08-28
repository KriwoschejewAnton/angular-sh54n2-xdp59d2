import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Item } from './item';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  items: Item[] = [];
  editHero: Item | undefined; // the hero currently being edited
  searchItem = '';
  isHidden = true;

  constructor(private heroesService: SearchService) {
    //alert('SearchComponent');
  }

  @ViewChild('heroEditInput')
  set heroEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {}

  search() {
    var searchTerm = this.searchItem;
    //alert(searchTerm);

    const myObserver = {
      next: () => alert('Observer got a next value: '),
      error: () => alert('Observer got an error: '),
      complete: () => alert('Observer got a complete notification'),
    };

    this.editHero = undefined;
    if (searchTerm.length > 3) {
      this.heroesService
        .searchHeroes(searchTerm)
        //.subscribe(myObserver);
        .subscribe((items) => this.set(items));
    } else {
    }
  }
  set(items: Item[]) {
    alert(this.searchItem + ' ### ' + items[1].name);
    this.items = items;
    this.isHidden = false;
  }

  hide() {
    alert('hide');
    this.isHidden = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
