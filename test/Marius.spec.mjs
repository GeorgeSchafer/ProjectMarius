import {
    threwError,
    did,
    have,
    is,
    matches,
    getCounter,
    count,
    valueMatch,
    throwsError,
    nullCheck
} from '../libs/ChaiFunctions/ChaiFunctions.mjs'
import {
    Crop,
    Cabbage,
    Grain,
    Grape,
    Melon
} from '../javascripts/Crops.mjs'
import { main } from '../Marius.mjs'
import { expect } from 'chai'



describe('Crops', () => {
    describe('Constructor', () => {
        const start = new Date()
        const crop = new Crop('rice')
        const cabbage = new Cabbage()
        const grain = new Grain()
        const grape = new Grape()
        const melon = new Melon()
        const finish = new Date()

        valueMatch(crop.name, 'rice')
        valueMatch(crop.stage, 0)
        valueMatch(crop.time, [])
        valueMatch(crop.getMature(), false)
        testStamp(start, finish, crop)

        valueMatch(cabbage.name, 'cabbage')
        valueMatch(cabbage.stage, 0)
        valueMatch(cabbage.time, [
            120000, 
            60000,
            30000,
            15000
        ])
        valueMatch(cabbage.getMature(), false)
        testStamp(start, finish, cabbage)

        valueMatch(grain.name, 'grain')
        valueMatch(grain.stage, 0)
        valueMatch(grain.time, [
            60000,
            40000,
            30000,
            15000,
            10000
        ])
        valueMatch(grain.getMature(), false)
        testStamp(start, finish, grain)

        valueMatch(grape.name, 'grape')
        valueMatch(grape.stage, 0)
        valueMatch(grape.time, [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ])
        valueMatch(grape.getMature(), false)
        testStamp(start, finish, grape)

        valueMatch(melon.name, 'melon')
        valueMatch(melon.stage, 0)
        valueMatch(melon.time, [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ])
        valueMatch(melon.getMature(), false)
        testStamp(start, finish, melon)
    })

    describe('Crop subclasses', () => {
        const start = new Date()
        const crops = {
            melons: [
                new Melon('watermelon'),
            ],
            grapes: [
                new Grape('red'),
            ],
            grains: [
                new Grain('maize'),
            ],
            cabbages: [
                new Cabbage('red')
            ]
        }
        const finish = new Date()

        valueMatch(crops.melons[0].name, 'watermelon')
        valueMatch(crops.melons[0].stage, 0)
        valueMatch(crops.melons[0].time, [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ])
        valueMatch(crops.melons[0].getMature(), false)
        testStamp(start, finish, crops.melons[0])

        valueMatch(crops.grains[0].name, 'maize')
        valueMatch(crops.grains[0].stage, 0)
        valueMatch(crops.grains[0].time, [
            60000,
            40000,
            30000,
            15000,
            10000
        ])
        valueMatch(crops.grains[0].getMature(), false)
        testStamp(start, finish, crops.grains[0])

        valueMatch(crops.grapes[0].name, 'red')
        valueMatch(crops.grapes[0].stage, 0)
        valueMatch(crops.grapes[0].time, [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ])
        valueMatch(crops.grapes[0].getMature(), false)
        testStamp(start, finish, crops.grapes[0])

        valueMatch(crops.cabbages[0].name, 'red')
        valueMatch(crops.cabbages[0].stage, 0)
        valueMatch(crops.cabbages[0].time, [
            120000, 
            60000,
            30000,
            15000
        ])
        valueMatch(crops.cabbages[0].getMature(), false)
        testStamp(start, finish, crops.cabbages[0])


    })

    describe('main', () => {
        main(true)
    })
})

function testStamp(start, finish, crop){
    const description = 'time stamp created between start and finish'
    it(getCounter() + description, () => {
        let constructedOnTime = start <= crop.getStamp() && crop.getStamp() <= finish
        expect(constructedOnTime).to.eql(true)
    })
    count()
}

