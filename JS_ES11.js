//Private class variable
class student {
    #student_name = "Praveen";

    getstudenr_name(){
        return this.#student_name
    }
}

const students = new student()
console.log(students.getstudenr_name());
console.log(students.student_name); // private variable can't call directly

// Nullish coalescing operator -->

// OR operator (||) =>
console.log(0 || 5) 
console.log("" || 5) 
console.log("name" || 5) 

// Logical operator (??) =>
console.log(0 ?? 5); 
console.log("" ?? 5); 
console.log(null ?? 5); 
console.log(false ?? 5 ); 
console.log(undefined ?? 5 ); 

// not possible to combine other logical operator &&, || directly with (??)

//console.log("hello" || undefined ?? "helloworld") // Error : unexpected token ??

console.log(("hello" || false) ?? "helloworld")
console.log(("hello" && null) ?? "helloworld")

// Optional Chaining Operator --> 

const contactDetails = {
    name : 'Praveen',
    contacts : 9876556789,
    details : {
        Id : {
            employee_ID : 1000099
        }
    }
}
// check =>
console.log("check : ",contactDetails.details.Id.employee_ID)
// safety check => 
if(contactDetails && contactDetails.details && contactDetails.details.Id.employee_ID){
    console.log("safety check : ",contactDetails.details.Id.employee_ID);
} 
// with optional chaining => 
console.log("with optional chaining : ",contactDetails?.details?.Id?.employee_ID)