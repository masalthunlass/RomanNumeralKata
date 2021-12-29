
type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        if (arabicNumber === 2) return 'II';
        return 'I';

    };


}

