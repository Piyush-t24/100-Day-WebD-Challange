// Used to store keyed collections & complex entities.
//  property => (key,value)pair
// Objects are a collection of properties

const student = {
    name:"piyush",
    age: 23,
    marks:94.4
};
console.log(student);

let student2 = ["piyush", 23 , 94.4];
console.log(student2);


let delhi = {
    latitude : "28.7041 N",
    longitude : "77.1025 E"
};
console.log(delhi);


const item = {
    price: 100.90,
    discount: 50,
    colors : ["red", "pink"]
}
console.log(item);


//  Create a thread/ twitter Post
//  username, content , likes , reposts, tags

const post = {
    username : "@Piyush_t24",
    content: " This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};