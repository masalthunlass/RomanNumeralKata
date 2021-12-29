type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {


      readonly RomanCharacter = { 5 : 'V', 1 : 'I'}

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber >= 5) {
            romanNumber += this.RomanCharacter[5];
            arabicNumber = arabicNumber - 5;
        }
         romanNumber += this.RomanCharacter[1].repeat(arabicNumber);
        return romanNumber;
    };


}

