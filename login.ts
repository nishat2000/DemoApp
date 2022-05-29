interface Iuser {
    name: string;
    email: string;
    course: string;
    password: string;
    // getAttendence(roll_num:number)
}
class User implements Iuser {
    name: string;
    email: string;
    course: string;
    password: string;
    constructor(name: string, email: string, course: string, password: string) {
        this.name = name;
        this.email = email;
        this.course = course;
        this.password = password;
    }

}
const Data: Array<Iuser> = [];
function register() {
    var Name = (document.getElementById("name") as HTMLInputElement).value;
    var Email = (document.getElementById("email") as HTMLInputElement).value;
    var Course = (document.getElementById("course") as HTMLInputElement).value;
    var Password = (document.getElementById("pwd") as HTMLInputElement).value;
    var nameRegEx = /^[A-Za-z\s]+$/;
    var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pwdRegEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).{8,15}$/;
    if (Name == null || Name == "") {
        alert("enter details");
    }
    else if(nameRegEx.test(Name)==false){
        alert("Name must contain only alphabets.")
    }
    else if (Email == null || Email == "") {
        alert("enter details");
    }
    else if(mailRegEx.test(Email)==false){
        alert("match the format of Email")
    }
    else if (Course == null || Course == "") {
        alert("enter details");
    }
    else if(nameRegEx.test(Course)==false){
        alert("Course must contain only alphabets.")
    }
    else if (Password == null || Password == "") {
        alert("enter details");
    }
    else if(pwdRegEx.test(Password)==false){
        alert("match the format of Password!")
    }
    else {
        let userobj = new User(Name, Email, Course, Password);
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].email == userobj.email) {
                alert("Data already exists!")
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
    let para = document.getElementById("content");
    para.innerHTML = ``
    let text1 = '';
    for (let i = 0; i < Data.length; i++) {
        text1 += `<tr>
        <td>${Data[i].name}</td>
        <td>${Data[i].email}</td>
        <td>${Data[i].course}</td>
        </tr>
        `
        para.innerHTML = text1;

    }
}
function login() {
    var LEmail = (document.getElementById("lemail") as HTMLInputElement).value;
    var LPassword = (document.getElementById("lpwd") as HTMLInputElement).value;
    var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const arr = Data.find(userobj => (userobj.email === LEmail && userobj.password === LPassword));
    if (arr == undefined) {
        alert('Invalid username & password!');
    }
    else {
        alert('Successfully Login!');
    }
}

// validation
function check_name() {
    var Name = document.getElementById("name") as HTMLInputElement;
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
    var Email = document.getElementById("email") as HTMLInputElement;
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
    var scourse = document.getElementById("course") as HTMLInputElement;
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
    var pwd = document.getElementById("pwd") as HTMLInputElement;
    if (pwd.value == null || pwd.value == "") {
        document.getElementById("cpwd").innerHTML = "password cannot be null.";
    }
    else {
        document.getElementById("cpwd").innerHTML = "";
        if (pwd.value.match(/[a-z]/g) && pwd.value.match(
            /[A-Z]/g) && pwd.value.match(
                /[0-9]/g) && pwd.value.match(
                    /[^a-zA-Z\d]/g) && pwd.value.length >= 8) {
            document.getElementById("cpwd").innerHTML = "";
        }
        else {
            document.getElementById("cpwd").innerHTML = "length must be minimum 8 digit and contain uppercase lowercase special character and number.";
        }
    }
}
