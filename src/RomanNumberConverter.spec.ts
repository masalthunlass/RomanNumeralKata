import {RomanNumberConverter} from "./RomanNumberConverter";

describe('convert to Roman Numeral  should', () => {
    let converter: RomanNumberConverter;

    beforeEach(() => {
        converter = new RomanNumberConverter();
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


    test('gives IV output for 4 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(4);
        expect(romanNumeral).toBe('IV');
    });

    test('gives V output for 5 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(5);
        expect(romanNumeral).toBe('V');
    });

    test('gives VI output for 6 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(6);
        expect(romanNumeral).toBe('VI');
    });

    test('gives VII output for 7 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(7);
        expect(romanNumeral).toBe('VII');
    });

    test('gives VIII output for 8 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(8);
        expect(romanNumeral).toBe('VIII');
    });

    test('gives IX output for 9 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(9);
        expect(romanNumeral).toBe('IX');
    });

    test('gives X output for 10 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(10);
        expect(romanNumeral).toBe('X');
    });

    test('gives XI output for 11 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(11);
        expect(romanNumeral).toBe('XI');
    });

    test('gives XII output for 12 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(12);
        expect(romanNumeral).toBe('XII');
    });
    test('gives XIII output for 13 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(13);
        expect(romanNumeral).toBe('XIII');
    });

    test('gives XIV output for 14 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(14);
        expect(romanNumeral).toBe('XIV');
    });

    test('gives XV output for 15 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(15);
        expect(romanNumeral).toBe('XV');
    });

    test('gives XVI output for 16 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(16);
        expect(romanNumeral).toBe('XVI');
    });

    test('gives XVII output for 17 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(17);
        expect(romanNumeral).toBe('XVII');
    });

    test('gives XVIII output for 18 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(18);
        expect(romanNumeral).toBe('XVIII');
    });


    test('gives XIX output for 19 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(19);
        expect(romanNumeral).toBe('XIX');
    });

    test('gives L output for 50 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(50);
        expect(romanNumeral).toBe('L');
    });

    test('gives XL output for 40 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(40);
        expect(romanNumeral).toBe('XL');
    });

    test('gives XLV output for 45 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(45);
        expect(romanNumeral).toBe('XLV');
    });


    test('gives C output for 100 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(100);
        expect(romanNumeral).toBe('C');
    });

    test('gives XC output for 90 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(90);
        expect(romanNumeral).toBe('XC');
    });

    test('gives XCV output for 95 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(95);
        expect(romanNumeral).toBe('XCV');
    });


    test('gives LXXV output for 75 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(75);
        expect(romanNumeral).toBe('LXXV');
    });

    test('gives D output for 500 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(500);
        expect(romanNumeral).toBe('D');
    });

    test('gives CD output for 400 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(400);
        expect(romanNumeral).toBe('CD');
    });


    test('gives LXXXVI output for 86 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(86);
        expect(romanNumeral).toBe('LXXXVI');
    });

    test('gives M output for 1000 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(1000);
        expect(romanNumeral).toBe('M');
    });

    test('gives CM output for 900 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(900);
        expect(romanNumeral).toBe('CM');
    });

    test('gives MCMLXXXVII output for 1987 as input', () => {
        let romanNumeral = converter.convertToRomanNumber(1987);
        expect(romanNumeral).toBe('MCMLXXXVII');
    });





















})

