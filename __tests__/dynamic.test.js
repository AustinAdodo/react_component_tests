const fs = require("fs");

describe("candidate written response", () => {
  it("should be modified", done => {
    const originalLength = 6;
    fs.readFile("./dynamic.md", (err, data) => {
      expect(data.length).toBeGreaterThan(originalLength);
      done();
    });
  });
});