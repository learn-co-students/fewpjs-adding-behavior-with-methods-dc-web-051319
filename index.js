class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return ""+this.name+" says meow!";
      }
     
  }
   
  class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return ""+this.name+" says woof!";
      }
     
    
  }
   
  class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    
    speak() {
        let genderCheck = this.sex == "male"
        if(genderCheck){
            return "It's me! "+this.name+", the parrot!"; }
        else{
            return ""+this.name+" says squawk!";
        }
      }
    
  }