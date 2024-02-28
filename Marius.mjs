import {
    Cabbage,
    Cauliflower,
    Lettuce,
    Grain,
    Maize,
    Wheat,
    Grape,
    RedGrape,
    WhiteGrape,
    Melon,
    Potato,
    Root,
    Carrot,
    Turnip,
    Farm,
    Field
} from './javascripts/Crops.mjs'


let running = true

const farm = new Farm()

const crops = {
    melons: [
        new Melon('watermelon'),
        new Melon('cantaloupe'),
        new Melon('honeydew')
    ],
    grapes: [
        new Grape('red'),
        new Grape('green')
    ],
    grains: [
        new Grain('wheat'),
        new Grain('maize'),
        new Grain('barley')
    ],
    cabbages: [
        new Cabbage('green'),
        new Cabbage('red')
    ]
}

farm.crops = crops

main(true)

function main(running){
    while(running){
        console.log('running')

        running = !farm.maturityCheck()

    }
    console.log('done')
}

const seasons = {
    warm: {type: 'boolean'},
    cold: {type: 'boolean'}
}




