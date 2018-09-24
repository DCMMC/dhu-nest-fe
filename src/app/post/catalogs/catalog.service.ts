import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from '../../model/index';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  selectedCatalog: Catalog;

  fetchCatalogs() {
    return this.http.get<Catalog[]>('/api/catalogs');
  }
}
