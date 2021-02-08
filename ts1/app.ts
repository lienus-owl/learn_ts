enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefined,
}

interface IPerson {
    Category: PersonCategory;
    canSignDocs(): boolean;
    printDetails(): any;
}

abstract class Person implements IPerson{
    Category: PersonCategory;
    private DateBirth: Date;

    constructor(dateOfBirth: Date) {
        this.DateBirth = dateOfBirth;
        this.Category = PersonCategory.Undefined;
    }

    abstract canSignDocs(): boolean
    printDetails(): void {
        console.log(`---`);
        console.log(`Дата рождения - ${this.DateBirth.toDateString()}`);
        console.log(`это: ${PersonCategory[this.Category]}`);
        console.log(`${this.canSignDocs()} подписывать документы`)
    }
}

class Infant extends Person{
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Infant;
    }
    canSignDocs(): boolean {
        return false;
    }
}

class Child extends Person{
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Child;
    }
    canSignDocs(): boolean {
        return false;
    }
}

class Adult extends Person{
    constructor(dateOfBirth: Date) {
        super(dateOfBirth);
        this.Category = PersonCategory.Adult;
    }
    canSignDocs(): boolean {
        return true;
    }
}

class PersonFactory {
    getPerson(dateOfBirth: Date) : IPerson {
        let dateNow = new Date(); // сейчас
        let currentMonth = dateNow.getMonth() + 1;
        let currentDate = dateNow.getDate();
        let dateTwoYearsAgo = new Date(dateNow.getFullYear() - 2, currentMonth, currentDate);
        let date18YearsAgo = new Date(dateNow.getFullYear() - 18, currentMonth, currentDate);

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth);
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth);
        }
        return new Adult(dateOfBirth);
    }
}


// test
let factory = new PersonFactory();

let some1 = factory.getPerson(new Date(2017, 1, 11));
some1.printDetails();

let some2 = factory.getPerson(new Date(2011, 3, 21));
some2.printDetails();

let some3 = factory.getPerson(new Date(1971, 5, 12));
some3.printDetails();