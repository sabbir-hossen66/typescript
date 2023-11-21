{
    //
    class animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = name;
        }
        makeSound() {
            console.log('I am making sound');

        }
    }

    class Dog extends animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log('i am barking');

        }
    }


    class cat extends animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMew() {
            console.log('cat is meawing');

        }
    }
    const getAnimal = (animal: animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        }
        else if (animal instanceof cat) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    }

    const dog = new Dog("dog is barking now", 'dog')
    const Cat = new cat("cat is barking now", 'cat')
    getAnimal(Cat)

    //

}