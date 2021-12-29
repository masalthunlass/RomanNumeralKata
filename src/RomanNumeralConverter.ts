enum RomanCharacter {
    I=1, V = 5, X = 10, L = 50, C= 100

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {

    static readonly  descendingRomanCharacterValues = [RomanCharacter.C, RomanCharacter.L, RomanCharacter.X, RomanCharacter.V, RomanCharacter.I ];

    convertToRomanNumeral = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';

        RomanNumeralConverter.descendingRomanCharacterValues.forEach( (romanCharacterValue, index) => {

            while (arabicNumber >= romanCharacterValue) {
                romanNumber += RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber-romanCharacterValue;
            }

            if (arabicNumber >= RomanNumeralConverter.descendingRomanCharacterValues[index+1] * 4) {
                romanNumber +=  RomanCharacter[RomanNumeralConverter.descendingRomanCharacterValues[index+1]]+RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber - (romanCharacterValue - RomanNumeralConverter.descendingRomanCharacterValues[index+1]);
            }
            if (arabicNumber === 9) {
                romanNumber +=  RomanCharacter[1]+RomanCharacter[10];
                arabicNumber = arabicNumber - 9;
            }

        })
        return romanNumber;
    };


}

