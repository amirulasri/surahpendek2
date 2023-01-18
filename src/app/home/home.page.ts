import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  navigateSurahPages(surahPage: any) {
    this.router.navigate(['/' + surahPage]);
  }
}
