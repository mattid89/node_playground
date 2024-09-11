abstract class Base {
    x(): number {
        return 0;
    };
}

class Derived extends Base {

    gotcha() {
        return this.x;
    }
}

const d = new Derived();
console.log(d.x()); // prints
