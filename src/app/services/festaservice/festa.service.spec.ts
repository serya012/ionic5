import { TestBed } from '@angular/core/testing';
import { FestaService } from './festa.service';

describe('FestaService', () => {
  let service: FestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FestaService],
    });
    service = TestBed.inject(FestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});