import { TemperaturPipe } from './temperatur.pipe';

describe('TemperaturPipe', () => {
  let pipe: TemperaturPipe;

  beforeEach(() => {
    pipe = new TemperaturPipe()
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform value to celcius", () => {
    expect(pipe.transform("22", "C")).toEqual("22°C");
  });

  it("should transform value to fehrenheit", () => {
    expect(pipe.transform("22")).toEqual("22°F");
  });
});
