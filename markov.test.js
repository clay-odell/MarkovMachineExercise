const { MarkovMachine } = require("./markov");

describe("Markov Machine", function () {
    let mm;
    beforeEach(function() {
        mm = new MarkovMachine("the cat in the hat");
    });

    test('makeChains method', function() {
        expect(mm.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
    });

    test('makeText method', function() {
        let text = mm.makeText(4);
        expect(text.split(' ')).toHaveLength(4);
    });

    test('constructor', function() {
        expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
    });
});