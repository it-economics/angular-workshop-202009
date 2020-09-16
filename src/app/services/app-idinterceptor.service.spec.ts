import { TestBed } from '@angular/core/testing';

import { AppIdinterceptorService } from './app-idinterceptor.service';

xdescribe('AppIdinterceptorService', () => {
  let service: AppIdinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppIdinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
