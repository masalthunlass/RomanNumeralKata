enum RomanCharacter {
    I=1, V = 5, X = 10, L = 50

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {


    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';

      [50,10, 5, 1].forEach( romanCharacterValue => {
            while (arabicNumber >= romanCharacterValue) {
                romanNumber += RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber-romanCharacterValue;
            }
            if (arabicNumber === 9) {
                romanNumber +=  RomanCharacter[1]+RomanCharacter[10];
                arabicNumber = arabicNumber - 9;
            }
            if (arabicNumber === 4) {
                romanNumber +=  RomanCharacter[1]+RomanCharacter[5];
                arabicNumber = arabicNumber - 4;
            }
        })
        return romanNumber;
    };


}

