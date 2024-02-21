const FIRST_NAMES = [
    'James',
    'William',
    'John',
    'Michael',
    'David',
    'Richard',
    'Charles',
    'Joseph',
    'Thomas',
    'Robert',
    'Daniel',
    'Christopher',
    'Matthew',
    'Andrew',
    'Joshua',
    'Anthony',
    'Brian',
    'Kevin',
    'Steven',
    'Billy',
    'Nicholas',
    'Eric',
    'Brandon',
    'Timothy',
    'Jonathan',
    'Adam',
    'Justin',
    'Benjamin',
    'Patrick',
    'Jeremy',
    'Austin',
    'Alexander',
    'Samuel',
    'Jeffrey',
    'Ryan',
    'Gregory',
    'Dennis',
    'Edward',
    'George',
    'Frank',
    'Scott',
    'Nathan',
    'Charles',
    'Charlie',
    'Chuck',
    'Walter',
    'Henry',
    'Harold',
    'Philip',
    'Lawrence',
    'Gary',
    'Albert',
    'Terry',
    'Jose',
    'Antonio',
    'Manuel',
    'Francisco',
    'Juan',
    'Pedro',
    'Miguel',
    'Angel',
    'Rafael',
    'Carlos',
    'Javier',
    'Alejandro',
    'Fernando',
    'David',
    'Daniel',
    'Jorge',
    'Luis',
    'Ramon',
    'Diego',
    'Jesus',
    'Mario',
    'Sergio',
    'Alberto',
    'Ruben',
    'Adolfo',
    'Enrique',
    'Ignacio',
    'Roberto',
    'Adrian',
    'Ernesto',
    'Victor',
    'Juan',
    'Carlos',
    'Oscar',
    'Emilio',
    'Guillermo',
    'Esteban',
    'Ricardo',
    'Francisco',
    'Alfonso',
    'Joaquin',
    'Gabriel',
    'Salvador',
    'Arturo',
    'Pablo',
    'Tomas',
    'Hugo',
    'Juan',
    'Federico',
    'Emily',
    'Emma',
    'Olivia',
    'Ava',
    'Isabella',
    'Sophia',
    'Mia',
    'Charlotte',
    'Amelia',
    'Harper',
    'Evelyn',
    'Abigail',
    'Victoria',
    'Sofia',
    'Camila',
    'Valentina',
    'Lucia',
    'Martina',
    'Emma',
    'Mariana',
    'Ana',
    'Julia',
    'Carolina',
    'Paula',
    'Isabel'
]

const LAST_NAMES = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Miller',
    'Davis',
    'Garcia',
    'Rodriguez',
    'Martinez',
    'Hernandez',
    'Lopez',
    'Gonzalez',
    'Wilson',
    'Anderson',
    'Thomas',
    'Taylor',
    'Moore',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Young',
    'King',
    'Scott',
    'Walker',
    'Lewis',
    'Wright',
    'Clark',
    'Hill',
    'Green',
    'Adams',
    'Baker',
    'Hall',
    'Allen',
    'Nelson',
    'Carter',
    'Mitchell',
    'Perez',
    'Roberts',
    'Turner',
    'Phillips',
    'Campbell',
    'Parker',
    'Evans',
    'Edwards',
    'Collins',
    'Stewart',
    'Sanchez',
    'Morris',
    'Rogers',
    'Reed',
    'Cook',
    'Morgan',
    'Murphy',
    'Rivera',
    'Bennett',
    'Cooper',
    'Gray',
    'Richardson',
    'Brooks',
    'Bailey',
    'James',
    'Ross',
    'Reyes',
    'Wood',
    'Watson',
    'Brooks',
    'Bennett',
    'Perry',
    'Powell',
    'Long',
    'Patterson',
    'Hughes',
    'Flores',
    'Washington',
    'Butler',
    'Simmons',
    'Foster',
    'Gonzales',
    'Bryant',
    'Alexander',
    'Russell',
    'Griffin',
    'Diaz',
    'Hayes',
    'Myers',
    'Ford',
    'Hamilton',
    'Graham',
    'Sullivan',
    'Wallace',
    'Woodward',
    'West',
    'Nunez'
]

class NPC {
    static FIRST_NAMES = FIRST_NAMES
    static LAST_NAMES = LAST_NAMES

    constructor(){
        /**
         * @param {int} morale is a measure of the character's morale toward their leader.
         *      High morale means they are less likely to spy or defect. 
         *      Scale is on 0-5,
    with 0 being the lowest and 5 being the highest.
         */
        this.morale = 0

        /**
         * Skills
         * 
         * @param {int} construction is a measure of the character's ability to build structures.
         *      High construction means they can build structures faster,
    and with less 
         *          resources,
    with greater durability.
         * @param {int} marksmanship is a measure of the character's ability to effectively
         *      use ranged weapons,
    standard for the wildlands.
         * @param {int} charisma is a measure of the character's ability to effectively spy
         *      against others. High charisma means they are more likely to be successful.
         * @param {int} mechanics is a measure of the character's ability to effectively
         *      build and repair machinery and electric systems. Power generation,
         *      crop processing as an example.  
         */
        this.construction = 0
        this.marksmanship = 0
        this.charisma = 0
        this.mechanics = 0

        this.rollStats()

    }

    rollStats(){
        const attributes = [
            this.marksmanship,
            this.construction,
            this.mechanics,
            this.charisma
        ]

        const points = 24
        const max = 6

        while( points >= 0 ){
            if(points <= 6){
                max = points
            } else {
                max = 6
            }

            attributes.forEach(attribute => {
                attribute =+ Math.floor(Math.random() * max)
                points -= max
            })
        } 
    }
}

/**
 * 
 * Constitution
 * Farming
 * 
 */