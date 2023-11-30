import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../types/Item';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemService {
  
  private itensUrl: string = 'http://localhost:8082/items';

  constructor(private http: HttpClient) { }

  getAllItems():Observable<Item[]>  { 
    return this.http.get<Item[]>(this.itensUrl);
  }  

}
