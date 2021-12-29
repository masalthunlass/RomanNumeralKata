enum RomanCharacter {
    I=1, V = 5, X = 10, L = 50, C= 100, D=500

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumeralConverter {

    static readonly  descendingRomanCharacterValues = [RomanCharacter.D, RomanCharacter.C, RomanCharacter.L, RomanCharacter.X,
        RomanCharacter.V, RomanCharacter.I ];

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

            if (index % 2 && arabicNumber >= (RomanNumeralConverter.descendingRomanCharacterValues[index+2] * 4) + RomanNumeralConverter.descendingRomanCharacterValues[index+1]) {
                romanNumber +=  RomanCharacter[RomanNumeralConverter.descendingRomanCharacterValues[index+2]]+RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber - (romanCharacterValue - RomanNumeralConverter.descendingRomanCharacterValues[index+2]);
            }



        })
        return romanNumber;
    };


}

