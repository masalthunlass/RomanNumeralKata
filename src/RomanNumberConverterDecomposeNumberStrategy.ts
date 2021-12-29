type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber >= 5) {
            romanNumber += 'V';
            arabicNumber = arabicNumber - 5;
        }
         romanNumber +='I'.repeat(arabicNumber);
        return romanNumber;
    };


}

