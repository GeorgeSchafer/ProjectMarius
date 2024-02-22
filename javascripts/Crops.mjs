
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

    static incrementStage(crops){    
        const now = Crop.stampTime()

        Object.values(crops).forEach(value => {
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

    static allMature(crops){
        Object.values(crops).forEach(value => {
            value.forEach(crop => {
                if(!crop.getMature()){
                    return false
                }
            })
        })
        
        return true
    }

    getMature(){
        return this.mature
    }

    getStamp(){
        return this.timeStamp
    }
}

class Cabbage extends Crop {
    constructor(){
        super('cabbage')
        this.time = [
            120000, 
            60000,
            30000,
            15000
        ]
    }
}

class Grain extends Crop {
    constructor(){
        super('grain')
        this.time = [
            60000,
            40000,
            30000,
            15000,
            10000
        ]
    }
}

class Grape extends Crop {
    constructor(){
        super('grape')
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

class Melon extends Crop {
    constructor(){
        super('melon')
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

export {
    Crop,
    Cabbage,
    Grain,
    Grape,
    Melon
}