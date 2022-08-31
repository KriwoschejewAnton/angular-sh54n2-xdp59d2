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
  searchItem = '';
  isOpen = false;

  constructor(private searchService: SearchService) {
    //alert('SearchComponent');
  }

  /*@ViewChild('itemEditInput')
  set itemEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }*/

  ngOnInit() {}

  search() {
    var searchTerm = this.searchItem;
    //alert(searchTerm);
    if (searchTerm.length > 3) {
      this.searchService
        .search(searchTerm)
        //.subscribe(myObserver);
        .subscribe((items) => this.set(items));
    } else {
    }
  }
  set(items: Item[]) {
    //alert(this.searchItem + ' ### ' + items[1].name);
    this.items = items;
    this.isOpen = true;
  }

  hide() {
    //alert('hide');

    setTimeout( () => { this.isOpen = false }, 500  );
  }

  select(item: Item) {
    alert(item.name);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
