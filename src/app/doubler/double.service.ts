import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { double } from './double';

@Injectable()
export class DoubleService {
  // NOTE: error disappears when this service does not inject the HttpClient
  readonly http = inject(HttpClient);

  double(value: number): number {
    return double(value);
  }
}
