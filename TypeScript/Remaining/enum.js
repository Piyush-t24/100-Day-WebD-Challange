//* _______________________________________________________
//* Enums in TS
//* _______________________________________________________
//? Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.
//* In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.
// user1 = login => normal user
// user2 = login => admin user
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Piyush",
    email: "piyush@gmail.com",
    password: "qwerty",
    role: Roles.admin,
};
var user2 = {
    email: "gupta@gmail.com",
    password: "uiop",
    role: Roles.user,
};
var isAdmin = function (user1) {
    var name = user1.name, email = user1.email, role = user1.role;
    return role === "admin"
        ? "".concat(email, " is allow to edit the website")
        : "".concat(email, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
