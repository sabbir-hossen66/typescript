{
    //
    //oop- class

    class animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);

        }
    }
    const dog = new animal("german shepard kutta", "dog", "ghew ghew");
    dog.makeSound();

    const cat = new animal("persian bhai", "cat", "meaw meaw");
    cat.makeSound();







    //

}