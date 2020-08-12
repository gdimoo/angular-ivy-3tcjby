import { PaginationService } from './pagination.service';
import { Component, OnInit } from '@angular/core';
interface CatList {
  name: string;
  picUrl: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public page: PaginationService<Array<CatList>>){}

  ngOnInit() {
    this.page.init('cats', 'name', { reverse: true, prepend: false })
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      console.log('more');
      this.page.more()
    }
  }
}
