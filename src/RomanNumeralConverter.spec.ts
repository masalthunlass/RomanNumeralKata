import {RomanNumeralConverter} from "./RomanNumeralConverter";

describe('convert to Roman Numeral  should', () => {
    let converter: RomanNumeralConverter;

    beforeEach(() => {
        converter = new RomanNumeralConverter();
    })


    test('gives I output for 1 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(1);
        expect(romanNumeral).toBe('I');
    });

    test('gives II output for 2 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(2);
        expect(romanNumeral).toBe('II');
    });

    test('gives III output for 3 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(3);
        expect(romanNumeral).toBe('III');
    });


    test('gives IV output for 4 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(4);
        expect(romanNumeral).toBe('IV');
    });

    test('gives V output for 5 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(5);
        expect(romanNumeral).toBe('V');
    });




})

