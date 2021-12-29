enum RomanCharacter {
    I=1, V = 5, X = 10, L = 50, C= 100, D=500, M=1000

}

type RomanNumber = string;
type ArabicNumber = number;


export class RomanNumberConverter {

    static readonly  descendingRomanCharacterValues = [
        RomanCharacter.M,
        RomanCharacter.D, RomanCharacter.C,
        RomanCharacter.L, RomanCharacter.X,
        RomanCharacter.V, RomanCharacter.I
    ];

    convertToRomanNumber = (arabicNumber: ArabicNumber): RomanNumber => {
        let romanNumber = '';

        RomanNumberConverter.descendingRomanCharacterValues.forEach( (romanCharacterValue, index) => {

            while (arabicNumber >= romanCharacterValue) {
                romanNumber += RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber-romanCharacterValue;
            }
            if (this.is4xxx(index, arabicNumber, romanCharacterValue)) {
                romanNumber +=  RomanCharacter[RomanNumberConverter.descendingRomanCharacterValues[index+1]]+RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber - (romanCharacterValue - RomanNumberConverter.descendingRomanCharacterValues[index+1]);
            }
            if (this.is9xxx(index, arabicNumber, romanCharacterValue)) {
                romanNumber +=  RomanCharacter[RomanNumberConverter.descendingRomanCharacterValues[index+2]]+RomanCharacter[romanCharacterValue];
                arabicNumber = arabicNumber - (romanCharacterValue - RomanNumberConverter.descendingRomanCharacterValues[index+2]);
            }


        })
        return romanNumber;
    };


    private is9xxx(index: number, arabicNumber: number, romanCharacterValue: number): boolean {
        return index % 2 == 0 && arabicNumber >= romanCharacterValue - RomanNumberConverter.descendingRomanCharacterValues[index + 2];
    }

    private is4xxx(index: number, arabicNumber: number, romanCharacterValue: number): boolean {
        return index % 2 == 1 && arabicNumber >= romanCharacterValue - RomanNumberConverter.descendingRomanCharacterValues[index + 1];
    }
}

