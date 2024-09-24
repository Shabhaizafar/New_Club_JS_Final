// some base class
class All { }
// SocialNetworkMixin
const Father = (superclass) => class extends superclass {
    Fathername = "Kaleen Bhaiya";
}
// AdProviderMixin
const Mother = (superclass) => class extends superclass {
    Mothername = "Beena Bhabhi";
}
// Our helper class that will make things look better
class Main {
    constructor(superclass) {
        this.superclass = superclass;
    }
    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}
// this will combine everything in one class
const mix = (superclass) => new Main(superclass);

class Facebook extends mix(All).with(Father,Mother) {
        childname = "Munna";
        lastname = "lname";
}
const fb = new Facebook();
console.log(fb.Fathername);
console.log(fb.Mothername);
console.log(fb.childname);
console.log(fb.lastname);