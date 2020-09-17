import { async, fakeAsync } from "@angular/core/testing";
import { of } from "rxjs";

import { AppIdinterceptorService, appid } from './app-idinterceptor.service';

describe('AppIdinterceptorService', () => {
  let service: AppIdinterceptorService;

  beforeEach(() => {
    service = new AppIdinterceptorService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should intercept", (done) => {
    const reqMock: any = {
      url: "/someUrl",
      clone: (obj) => obj
    };
    const nextMock: any = {
      handle: (obj) => of(obj)
    }
    service.intercept(reqMock, nextMock).subscribe((newReq: any) => {
      expect(newReq).toEqual({ url: reqMock.url + appid });
      done();
    });
  });
});
