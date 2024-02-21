
class Crop {
    constructor(name){
        this.name = name
        this.stage = 0
        this.time = []
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
    Cabbage,
    Grain,
    Grape,
    Melon
}