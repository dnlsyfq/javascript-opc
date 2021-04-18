//  enforce cleaner js 
'use strict'; 
// 
// (function() {

//   display('Hello World'); 

// })();

// create object literal 

/*
(
  function(){
    let person = {
      firstName:'Jim',
      lastName:'Cooper',
      isAdult: function(){
        return person.age >= 18;
      }
    };

    person.age = 29;
    person.isAdult = function(){return this.age >= 18; }

    display(person.firstName);
    display(person.age);

    // document.getElementById('output').innerText = person.firstName;
  }
)();
*/

// create object literal 

(
  function(){

    function registerUser(fName,lName){
      let person = {
        firstName: fName,
        lastName: lName
      }

      display(person);
    }

    registerUser('Jim','Cooper');



  }
)();

// create object literal
(
  function(){
    let person = {
      firstName:'Jim',
      lastName:'Cooper',
      age:17,
      isAdult(){
        return this.age >= 18;
      }
    };

    display(person.isAdult());
    display(Object.keys(person));
    display(person);

    for(let propertyName in person){
      display(propertyName);
    }
  }
)();