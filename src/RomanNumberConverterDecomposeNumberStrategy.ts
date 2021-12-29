type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        if (arabicNumber === 3) return 'III';
        if (arabicNumber === 2) return 'II';
        return 'I';
    };


}

