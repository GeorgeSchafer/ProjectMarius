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
import { expect } from 'chai'



describe('Crops', () => {
    describe('Crop Constructor', () => {
        const start = new Date()
        const crop = new Crop('rice')
        const finish = new Date()

        valueMatch(crop.name, 'rice')
        valueMatch(crop.stage, 0)
        valueMatch(crop.time, [])
        valueMatch(crop.getMature(), false)
        testStamp(start, finish, crop)
    })

    describe('Crop subclass Constructors', () => {
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

