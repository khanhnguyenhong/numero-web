import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AiService {
  constructor(private httpClient: HttpClient) {}

  requestByContent(content) {
    return this.httpClient.get<string>('api/dummy-ai/' + content);
  }
}
