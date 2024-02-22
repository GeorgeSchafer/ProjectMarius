import {
    Crop,
    Cabbage,
    Grape,
    Grain,
    Melon
} from './javascripts/Crops.mjs'


let running = true

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

function main(running){
    while(running){
        console.log('running')

        Crop.incrementStage(crops)

        if(Crop.allMature(crops)){
            running = false
        }

    }
    console.log('done')
}


export {
    main
}



