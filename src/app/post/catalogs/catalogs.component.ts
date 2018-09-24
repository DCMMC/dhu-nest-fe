import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Catalog } from '../../model/index';
import { MatChipListChange } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  constructor(private catalogService: CatalogService) { }

  catalogs: Catalog[] = [];

  get selectedCatalog() {
    return this.catalogService.selectedCatalog;
  }

  set selectedCatalog(catalog: Catalog) {
    this.catalogService.selectedCatalog = catalog;
  }

  ngOnInit() {
    this.catalogService.fetchCatalogs().subscribe((catalogs) => {
      this.catalogs = catalogs;
    });
  }

  onClick(item: Catalog) {
    if (this.selectedCatalog === item) {
      this.selectedCatalog = undefined;
    } else {
      this.selectedCatalog = item;
    }
  }
}
