// 3. Multiple Inheritance
// Definition:
// Multiple inheritance refers to a scenario where a class or object inherits from more than one parent class or object. JavaScript does not support multiple inheritance directly through classes; however, you can achieve similar behavior using mixins.
class All{

}




const Father = (superclass)=> class extends superclass{ 
    Fathername = "Kaleen Bhaiya";
    
}


const Mother = (superclass)=> class extends superclass{ 
    Mothername = "Beena Bhabhi";
}
class MixinBuilder{
    constructor(superclass){
        this.superclass = superclass;
    }
    with(...mixins){
        return mixins.reduce((c,mixin) => mixin(c), this.superclass);
    }
}


const mix = (superclass)=>new MixinBuilder(superclass);



class Child extends mix(All).with(Father,Mother){
    childname = "Munna";
    lastname = "lname";
}
const c1 = new Child();
console.log(c1);