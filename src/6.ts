import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SchoolEventsService {
  constructor(private http: HttpClient) {}
  getEventList(): Observable<any[]> {
    return this.http.get('https://example.com/events').pipe(map(res => res));
  }
}
