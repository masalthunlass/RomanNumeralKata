enum RomanCharacter {
    I=1, V = 5, X = 10

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';
        if (arabicNumber === 4) return  RomanCharacter[1]+RomanCharacter[5];
        if (arabicNumber === 9) return  RomanCharacter[1]+RomanCharacter[10];
        if (arabicNumber >= 5) {
            romanNumber = RomanCharacter[5];
            arabicNumber= arabicNumber-5;
        }
        for (let i = 0; i < arabicNumber;i++) {
            romanNumber += RomanCharacter[1];
        }
        return romanNumber;

    };


}

