{

    //oop - inheritence

    class student {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);

        }

    }
    const student1 = new student('Mr.student', 20, 'uganda');
    // student1.()


    //teacher class

    class teacher {
        name: string;
        age: number;
        address: string;
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);

        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);

        }
    }
    const teacher1 = new teacher('Mr.teacher', 40, 'uganda', 'professor');
    teacher1.





    //
}