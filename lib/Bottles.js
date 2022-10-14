export class Bottles {

    constructor() {

    }

    verse(number) {
        if (number === 0) {
            return `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`
        } else if (number === 1) {
            return `1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.`
        }
        return `${number} bottles of beer on the wall, ${number} bottles of beer. Take one down and pass it around, ${number - 1} ${number - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.`
    }

}