/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov");

describe("Markov Machine", function () {
  test("makeChains method", function () {
    let mm = newMarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual({
      the: ["cat", "hat"],
      cat: ["in"],
      in: ["the"],
      hat: [null],
    });
  });
});
