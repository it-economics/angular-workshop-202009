const test = require("../test");

describe("testing test module", () => {
  it("add3 works", () => {
    const result = test.add3(1);
    expect(result).toEqual(4);
  });
});
