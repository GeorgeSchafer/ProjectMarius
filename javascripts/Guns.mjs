class GunPart {
    constructor(widthPx){
        this.width = widthPx
    }

}

class Body {

}

class Stock {
    constructor(widthPx){
        super(widthPx)
    }
}

class Sight {
    constructor(){

    }
}

class Barrel {
    constructor(){

    }
}

class BarrelMod {
    constructor(){

    }
}

class Gun {
    constructor(){
        this.body = new Body()
        this.stock = new Stock()
        this.barrel = new Barrel()
        this.sight = null
        this.barrel_mod = null
    }

}

class ArmSet {
    constructor(name, tilesetPath){
        this.name = name
        this.tileset = tilesetPath
    }
}

const PIPE_SET = new ArmSet('Pipe','jadedrakerider/pipe gun constructor/16x/modular-pipe-guns.tileset.json')
const pipe_body_1 = new Body(3)
const pipe_body_2 = new Body(5)
const pipe_body_3 = new Body(7)


