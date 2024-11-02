import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../../Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl = 'http://localhost:3000/compras';

  constructor(private http: HttpClient) { }

  getCompras() : Observable<Compra[]>{
    return this.http.get<Compra[]>(this.apiUrl);
  }

  deleteItem(item: Compra): Observable<Compra>{

    return this.http.delete<Compra>(`${this.apiUrl}/${item.id}`)

  }

  updateConcluido(compras:Compra) : Observable<Compra>{
    return this.http.put<Compra>(`${this.apiUrl}/${compras.id}`,compras);
  }
  AddItem(compras:Compra): Observable <Compra>{
    return this.http.post<Compra>(`${this.apiUrl}`, compras);
  }
}
