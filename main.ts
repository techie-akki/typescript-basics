export{}
let msg= 'Hello Akki';
console.log(msg);

// variable declaration
let x = 10;
const y = 12;

// let x =20;  once declared same cant be declared again

let sum;
const title = 'crownstack';

// variable types
let isBegginer : boolean = true;
let name : string = 'Akki';
let z:number = 4;
// name=true; not acceptable type mismatch

let sentence: string = `My name is ${name}
I am a beginner`;
console.log(sentence);

// null & undefined
let n:null = null;
let u:undefined = undefined;

let isNew:boolean=null;
let myName:string=undefined;

// array of same type
let list1:number[]=[1,2,3,4];

let list2:Array<number>=[1,2,3,4]; // both way we can define
console.log(list1,list2);

// array of mixed type tuple is used
let person1:[string,number]=['akki',25];
console.log(person1);

// enum type (behahes as typedef of c)
enum Color {red,green,blue};
let c:Color = Color.green;
console.log(c); //=>1

// any type
let rand:any=10;
rand=true;
rand='akki';

//unknown type introduced in v3 to tackle not throwing issue by any type
let myvar:unknown=10;

function hasName(obj:any): obj is {name:string}{
  return !!obj && typeof obj == "object" && "name" in obj
}
if(hasName(myvar)){
console.log(myvar.name);
}

//(myvar as string).toUpperCase();  // string is type assertion or typecasting 

//type inference
let a;
a=10;
a=true;

let b=20;
// b=true; shows error due to type inference

// union of types
let multiType : number | boolean;
multiType=20;
multiType = true;


function add(a:number,b:number=10):number{
  return a+b;
}

//Interface

interface Person{
  firstName:string;
  lastName:string;
}

function fullName(person:Person){
  console.log(`${person.firstName} ${person.lastName}`);
}

let p ={
  firstName : 'akki',
  lastName :'me'
}

fullName(p);

// Class
class Employee{
  public eName:string;
  
  constructor(name:string){
    this.eName = name;
  }

  greet(){
    console.log(`Good Morning ${this.eName}`);
  }

}

let emp1 = new Employee('Akki');
console.log(emp1.eName);
emp1.greet();


class Manager extends Employee{
  constructor(mName:string){
    super(mName);
  }
  dWork(){
    console.log(`Manager delegating work`);
  }
}

let m1= new Manager('bruce');
m1.dWork();
m1.greet();
console.log(m1.eName);