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



describe('Crops', () => {
    describe('Constructor', () => {
        const crop = new Crop('rice')
        valueMatch(crop.name, 'rice')
        valueMatch(crop.stage, 0)
        valueMatch(crop.time, [])
        valueMatch(crop.mature, false)
    })
})
