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

    test('gives VI output for 6 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(6);
        expect(romanNumeral).toBe('VI');
    });

    test('gives VII output for 7 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(7);
        expect(romanNumeral).toBe('VII');
    });

    test('gives VIII output for 8 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(8);
        expect(romanNumeral).toBe('VIII');
    });

    test('gives IX output for 9 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(9);
        expect(romanNumeral).toBe('IX');
    });

    test('gives X output for 10 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(10);
        expect(romanNumeral).toBe('X');
    });

    test('gives XI output for 11 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(11);
        expect(romanNumeral).toBe('XI');
    });

    test('gives XII output for 12 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(12);
        expect(romanNumeral).toBe('XII');
    });
    test('gives XIII output for 13 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(13);
        expect(romanNumeral).toBe('XIII');
    });

    test('gives XIV output for 14 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(14);
        expect(romanNumeral).toBe('XIV');
    });

    test('gives XV output for 15 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(15);
        expect(romanNumeral).toBe('XV');
    });

    test('gives XVI output for 16 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(16);
        expect(romanNumeral).toBe('XVI');
    });

    test('gives XVII output for 17 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(17);
        expect(romanNumeral).toBe('XVII');
    });

    test('gives XVIII output for 18 as input', () => {
        let romanNumeral = converter.convertToRomanNumeral(18);
        expect(romanNumeral).toBe('XVIII');
    });











})

