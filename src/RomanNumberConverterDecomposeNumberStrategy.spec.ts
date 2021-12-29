import {RomanNumberConverterDecomposeNumberStrategy} from "./RomanNumberConverterDecomposeNumberStrategy";

describe('convert to Roman Numeral  should', () => {
    let converter: RomanNumberConverterDecomposeNumberStrategy;

    beforeEach(() => {
        converter = new RomanNumberConverterDecomposeNumberStrategy();
    })

    test('gives I output for 1 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(1);
        expect(romanNumeral).toBe('I');
    });
})
