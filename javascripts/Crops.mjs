class Crop {
    constructor(name){
        this.timeStamp = Crop.stampTime()
        this.name = name
        this.stage = 0
        this.time = []
        this.mature = false
    }

    static stampTime(){
        return new Date()
    }

    getMature(){
        return this.mature
    }

    getStamp(){
        return this.timeStamp
    }
}

class Cabbage extends Crop {
    constructor(name='cabbage'){
        super(name)
        this.time = [
            60000,
            30000,
            15000,
            10000
        ]
    }
}

class Cauliflower extends Cabbage {
    constructor(name='cauliflower'){
        super(name)
        animation_tile_ids = [1279]
    }

}

class Lettuce extends Cabbage {
    constructor(name='lettuce'){
        super(name)
        animation_tile_ids = [1644]
    }
}

class Grain extends Crop {
    constructor(name='grain'){
        super(name)
        this.time = [
            30000,
            15000,
            10000,
            7500,
            3750

        ]
    }
}

class Maize extends Grain {
    constructor(name='maize'){
        super(name)
        animation_tile_ids = [1524,1483]
    }
}

class Wheat extends Grain {
    constructor(name='wheat'){
        super(name)
        animation_tile_ids = [1442,1401]
    }

}

class Grape extends Crop {
    constructor(name='grape'){
        super(name)
        this.time = [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ]
    }
}

class RedGrape extends Grape {
    constructor(name='red grape'){
        super(name)
        animation_tile_ids = [1606,1565,1361]
    }
}

class WhiteGrape extends Grape {
    constructor(name='white grape'){
        super(name)
        animation_tile_ids = [1606,1565,1357]
    }
}

class Melon extends Crop {
    constructor(name='melon'){
        super(name)
        this.time = [
            120000,
            90000,
            60000,
            30000,
            15000,
            7500
        ]
        animation_tile_ids = [1320]
    }
}

class Potato extends Crop {
    constructor(name='potato'){
        super(name)
        this.time = [
            60000,
            40000,
            30000,
            15000,
            7500
        ]
    }

}

class Root extends Crop {
    constructor(name='root'){
        super(name)
        this.time = [
            30000,
            15000,
            7500
        ]
    }
}

class Carrot extends Root {
    constructor(name='carrot'){
        super(name)
        animation_tile_ids = [1237]
    }
}

class Turnip extends Root {
    constructor(name='turnip'){
        super(name)
        animation_tile_ids = [1155]
    }
}

class Farm {
    constructor(){
        this.crops = {
            cabbages: [],
            grains: [],
            grapes: [],
            melons: [],
            roots: [],
            potatoes: [],
            beans: [],
            trees: []
        }
        this.fields = []
    }

    maturityCheck(){
        /**
         * @param {Object} this.crops - An object containing arrays of Crop objects
         *      crops = {
         *         cabbages: [cabbage1, cabbage2, ...],
         *         ...
         *      }
         */
        let result = true
        Object.values(this.crops).forEach(value => {
            value.forEach(crop => {
                if(!crop.getMature()){
                    result = false
                }
            })
        })
        
        return result
    }

    incrementStage(){
        const now = Crop.stampTime()

        Object.values(this.crops).forEach(value => {
            value.forEach(crop => {
                if(!crop.getMature() && this.timeStamp - now > crop.time[crop.stage]){
                    crop.timeStamp = now
                    crop.stage++
                    crop.stage === crop.time.length
                        ? crop.mature = true 
                        : crop.mature = false
                    console.log(`The ${crop.name} is now at stage ${crop.stage} of ${crop.time.length}`)
                }
            })
        })
    }
}

class Field {
    constructor(){
        /**
         * @param {Array} this.plots - is an array of arrays that represent the field
         *     by their index. Each plot is a 1x1 square of land.
         */
        this.plot = [
            []
        ]
        this.health = 4
    }

    getPlot(x, y=0){
        return this.plot[x][y]
    }

    setPlot(crop, x, y=0){
        this.plot[x][y] = crop
    }
}

export {
    Crop,

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
}