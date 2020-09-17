import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelloListComponent} from './hello-list.component';
import {By} from "@angular/platform-browser";

describe('HelloListComponent', () => {
  let component: HelloListComponent;
  let fixture: ComponentFixture<HelloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('greets every name from input', () => {
    component.names = ['Maria', 'Max', 'Anton'];
    fixture.detectChanges();

    const paragraphTags: HTMLElement[] = fixture.debugElement.queryAll(By.css('p')).map(debugElement => debugElement.nativeElement as HTMLElement)
    expect(paragraphTags.length).toEqual(3);
    expect(paragraphTags[0].innerText).toEqual('Hello Maria')
    expect(paragraphTags[1].innerText).toEqual('Hello Max')
    expect(paragraphTags[2].innerText).toEqual('Hello Anton')
  });
});
