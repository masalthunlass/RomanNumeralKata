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

    test('gives II output for 2 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(2);
        expect(romanNumeral).toBe('II');
    });

    test('gives III output for 3 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(3);
        expect(romanNumeral).toBe('III');
    });

    test('gives V output for 5 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(5);
        expect(romanNumeral).toBe('V');
    });
    test('gives VI output for 6 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(6);
        expect(romanNumeral).toBe('VI');
    });
})
