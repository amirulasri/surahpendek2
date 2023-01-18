import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() {
    this.items = [
      {
        id: 1,
        surahName: "Al Qadr",
        page: "al-qadr"
      },
      {
        id: 2,
        surahName: "An Nas",
        page: "an-nas"
      },
      {
        id: 3,
        surahName: "Al Falaq",
        page: "al-falaq"
      },
      {
        id: 4,
        surahName: "Al Kafirun",
        page: "al-kafirun"
      },
      {
        id: 5,
        surahName: "Al Ikhlas",
        page: "al-ikhlas"
      }
    ];
  }

  filterItems(searchTerm: any) {
    return this.items.filter((item: any) => {
      return item.surahName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
