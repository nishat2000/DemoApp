var User = /** @class */ (function () {
    function User(name, email, course, password) {
        this.name = name;
        this.email = email;
        this.course = course;
        this.password = password;
    }
    return User;
}());
var Data = [];
function register() {
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Course = document.getElementById("course").value;
    var Password = document.getElementById("pwd").value;
    var nameRegEx = /^[A-Za-z\s]+$/;
    var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pwdRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{8,15}$/;
    if (Name == null || Name == "") {
        alert("enter details");
    }
    else if (nameRegEx.test(Name) == false) {
        alert("Name must contain only alphabets.");
    }
    else if (Email == null || Email == "") {
        alert("enter details");
    }
    else if (mailRegEx.test(Email) == false) {
        alert("match the format of Email");
    }
    else if (Course == null || Course == "") {
        alert("enter details");
    }
    else if (nameRegEx.test(Course) == false) {
        alert("Course must contain only alphabets.");
    }
    else if (Password == null || Password == "") {
        alert("enter details");
    }
    else if (pwdRegEx.test(Password) == false) {
        alert("match the format of Password!");
    }
    else {
        var userobj = new User(Name, Email, Course, Password);
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].email == userobj.email) {
                alert("Data already exists!");
                return false;
            }
        }
        Data.push(userobj);
        this.displaydata();
    }
}
function displaydata() {
    var tab = document.getElementById("tab");
    if (tab.hidden == true) {
        tab.hidden = false;
    }
    var para = document.getElementById("content");
    para.innerHTML = "";
    var text1 = '';
    for (var i = 0; i < Data.length; i++) {
        text1 += "<tr>\n        <td>".concat(Data[i].name, "</td>\n        <td>").concat(Data[i].email, "</td>\n        <td>").concat(Data[i].course, "</td>\n        </tr>\n        ");
        para.innerHTML = text1;
    }
}
function login() {
    var LEmail = document.getElementById("lemail").value;
    var LPassword = document.getElementById("lpwd").value;
    var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var arr = Data.find(function (userobj) { return (userobj.email === LEmail && userobj.password === LPassword); });
    if (arr == undefined) {
        alert('Invalid username & password!');
    }
    else {
        alert('Successfully Login!');
    }
}
// validation
function check_name() {
    var Name = document.getElementById("name");
    var nameRegEx = /^[A-Za-z\s]+$/;
    if (Name.value == null || Name.value == "") {
        document.getElementById("cname").innerHTML = "Name cannot be null.";
    }
    else {
        document.getElementById("cname").innerHTML = "";
        if (Name.value.match(nameRegEx)) {
            document.getElementById("cname").innerHTML = "";
        }
        else {
            document.getElementById("cname").innerHTML = "Name must contain only alphabets.";
        }
    }
}
function check_email() {
    var Email = document.getElementById("email");
    var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.value == null || Email.value == "") {
        document.getElementById("cemail").innerHTML = "Email cannot be null.";
    }
    else {
        document.getElementById("cemail").innerHTML = "";
        if (Email.value.match(mailRegEx)) {
            document.getElementById("cemail").innerHTML = "";
        }
        else {
            document.getElementById("cemail").innerHTML = "Match the Format.";
        }
    }
}
function check_course() {
    var scourse = document.getElementById("course");
    var nameRegEx = /^[A-Za-z\s]+$/;
    if (scourse.value == null || scourse.value == "") {
        document.getElementById("ccourse").innerHTML = "Course cannot be null.";
    }
    else {
        document.getElementById("ccourse").innerHTML = "";
        if (scourse.value.match(nameRegEx)) {
            document.getElementById("ccourse").innerHTML = "";
        }
        else {
            document.getElementById("ccourse").innerHTML = "Course must contain only alphabets.";
        }
    }
}
function check_pwd() {
    var pwd = document.getElementById("pwd");
    if (pwd.value == null || pwd.value == "") {
        document.getElementById("cpwd").innerHTML = "password cannot be null.";
    }
    else {
        document.getElementById("cpwd").innerHTML = "";
        if (pwd.value.match(/[a-z]/g) && pwd.value.match(/[A-Z]/g) && pwd.value.match(/[0-9]/g) && pwd.value.match(/[^a-zA-Z\d]/g) && pwd.value.length >= 8) {
            document.getElementById("cpwd").innerHTML = "";
        }
        else {
            document.getElementById("cpwd").innerHTML = "length must be minimum 8 digit and contain uppercase lowercase special character and number.";
        }
    }
}
