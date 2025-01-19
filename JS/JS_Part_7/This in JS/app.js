const student = {
    name: "piyush",
    age: 23,
    eng:95,
    math:98,
    phy:97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        // console.log(avg);
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
console.log(student.name);
console.log(student.math);
console.log(student.getAvg);