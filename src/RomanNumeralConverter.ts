enum RomanCharacter {
    I=1, V = 5, X = 10, L = 50

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {

    static readonly  descendingRomanCharacterValues = [RomanCharacter.L, RomanCharacter.X, RomanCharacter.V, RomanCharacter.I ];

    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';

        RomanNumeralConverter.descendingRomanCharacterValues.forEach( romanCharacterValue => {
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

            if (arabicNumber === 40) {
                romanNumber +=  RomanCharacter[10]+RomanCharacter[50];
                arabicNumber = arabicNumber - 40;
            }
        })
        return romanNumber;
    };


}

