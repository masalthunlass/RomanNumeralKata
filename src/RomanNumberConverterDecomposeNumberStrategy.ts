type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {


    readonly RomanCharacter = { 5 : 'V', 1 : 'I', 10 : 'X'}

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber >= 9) {
            romanNumber += this.RomanCharacter[10];
            arabicNumber = arabicNumber - 10;
        }
        if (arabicNumber >= 4) {
            romanNumber += this.RomanCharacter[5];
            arabicNumber = arabicNumber - 5;
        }
        if (arabicNumber < 0) return this.RomanCharacter[1] + romanNumber;
        romanNumber += this.RomanCharacter[1].repeat(arabicNumber);
        return romanNumber;
    };


}

