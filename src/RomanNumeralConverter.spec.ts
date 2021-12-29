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


})

