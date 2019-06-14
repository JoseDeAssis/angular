import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ContatoService {

  contatosUrl = 'http://localhost:4200/api/AngularServlet/AngularServlet';
  // contatosUrl = 'http://localhost:4200/api/AngularSpring/pesquisarPessoas';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.contatosUrl);
  }

  inserirPessoa(filtro) : Observable<any> {
    return this.http.post<any>(this.contatosUrl, filtro);
  }

  deletarPessoa(filtro): Observable<any> {
    return this.http.post<any>(this.contatosUrl, filtro);
  }

  alterarPessoa(filtro): Observable<any> {
    return this.http.post<any>(this.contatosUrl, filtro);
  }

  transferirDados(filtro): Observable<any> { 
    return this.http.post<any>(this.contatosUrl, filtro);
  }

  buscarPessoa(filtro): Observable<any> { 
    return this.http.post<any>(this.contatosUrl, filtro);
  }
}
