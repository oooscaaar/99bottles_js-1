export class Bottles {

    constructor() {

    }

    verse(number) {
        return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} ${number - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`
    }

}