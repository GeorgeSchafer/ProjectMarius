class GunPart {
    constructor(widthPx){
        this.width = widthPx
    }

}

class Body extends GunPart {
    constructor(widthPx){
        super(widthPx)
    }
}

class Stock extends GunPart {
    constructor(widthPx){
        super(widthPx)
    }
}

class Sight extends GunPart {
    constructor(widthPx){
        super(widthPx)
    }
}

class Barrel extends GunPart {
    constructor(widthPx){
        super(widthPx)
    }
}

class BarrelMod extends GunPart {
    constructor(widthPx){
        super(widthPx)
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
        this.parts = {
            body: {
                pistol: new Body(3),
                rifle: new Body(5),
                long: new Body(7),
            },
            stocks: {
                grip: new Stock(1),
                hollow: new Stock(3)
            },
            sights: {
                iron: new Sight(1),
                glow: new Sight(2),
                scope: new Sight(5)
            },
            barrel: {
                snub: new Barrel(1),
                short: new Barrel(2),
                medium: new Barrel(6),
                long: new Barrel(10)
            },
            barrel_mod: {
                bayonet: new BarrelMod(8)
            }
        }
    }
}

const PIPE_SET = new ArmSet('Pipe','jadedrakerider/pipe gun constructor/16x/modular-pipe-guns.tileset.json')
