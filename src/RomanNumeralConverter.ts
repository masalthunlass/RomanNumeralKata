
type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        for(let i = 0; i < arabicNumber;i++) {
            romanNumber += 'I';
        }
        return romanNumber;

    };


}

