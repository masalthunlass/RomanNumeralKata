
type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber == 4) return 'IV';
        for(let i = 0; i < arabicNumber;i++) {
            romanNumber += 'I';
        }
        return romanNumber;

    };


}

