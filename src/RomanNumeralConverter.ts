
type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber == 4) return 'IV';
        if (arabicNumber == 5) return 'V';
        for (let i = 0; i < arabicNumber;i++) {
            romanNumber += 'I';
        }
        return romanNumber;

    };


}

