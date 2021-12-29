type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverterDecomposeNumberStrategy {


    readonly RomanCharacter = { 5 : 'V', 1 : 'I', 10 : 'X'}



    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
       [10,5].forEach(romanValue => {
            if (arabicNumber >= romanValue-1) {
                // @ts-ignore
                romanNumber += this.RomanCharacter[romanValue];
                arabicNumber = arabicNumber - romanValue;
            }
        })
        if (arabicNumber < 0) return this.RomanCharacter[1] + romanNumber;
        romanNumber += this.RomanCharacter[1].repeat(arabicNumber);
        return romanNumber;
    };


}

