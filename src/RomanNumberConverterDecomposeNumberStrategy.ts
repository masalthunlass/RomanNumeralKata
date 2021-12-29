type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {

        return 'I'.repeat(arabicNumber);
    };


}

