export class Bottles {

    constructor() {
    }

    getVerse(numberOfBottles) {
        switch (numberOfBottles) {
            case 0:
                return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;
            case 1:
                return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.`;
            default:
                return `${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.\nTake one down and pass it around, ${numberOfBottles - 1} ${numberOfBottles - 1 <= 1 ? 'bottle' : 'bottles'} of beer on the wall.`
        }
    }

    verse(number) {
        return this.getVerse(number)
    }

    verses(first, second) {
        let composedVerses = ``
        for (let i = first; i >= second; i--) {
            composedVerses += this.getVerse(i) + (i > second ? '\n\n' : '')
        }
        return composedVerses
    }

    song() {
        return this.verses(99, 0)
    }
}