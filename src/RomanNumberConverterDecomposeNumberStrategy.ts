type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        if (arabicNumber === 5) return 'V';
        return 'I'.repeat(arabicNumber);
    };


}

