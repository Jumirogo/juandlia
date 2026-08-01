import "./firebase.js";

import { PasswordScreen, UserScreen } from "./auth.js";

import { MainLayout } from "./ui.js";

import { navigate } from "./router.js";

const app = document.getElementById("app");

showPassword();

function showPassword() {

    app.innerHTML = PasswordScreen();

    document
        .getElementById("password-button")
        .onclick = checkPassword;

}

function checkPassword() {

    const password =
        document.getElementById("password-input").value;

    if(password !== "easter2027"){

        alert("Wrong password");

        return;

    }

    showUserSelection();

}

function showUserSelection(){

    app.innerHTML = UserScreen();

    document
        .getElementById("juan-button")
        .onclick = () => selectUser("Juan");

    document
        .getElementById("lea-button")
        .onclick = () => selectUser("Lea");

}

function selectUser(user){

    sessionStorage.setItem("user", user);

    startApplication();

}

function startApplication(){

    app.innerHTML = MainLayout();

    navigate("home");

    document
        .querySelectorAll("[data-page]")
        .forEach(button=>{

            button.onclick=()=>{

                navigate(button.dataset.page);

            }

        });

}

function getJournalDate(){

    const now=new Date();

    if(
        now.getHours()<1 ||
        (
            now.getHours()==1 &&
            now.getMinutes()<30
        )
    ){

        now.setDate(now.getDate()-1);

    }

    return now;

}

/*import "./firebase.js";

import { MainLayout } from "./ui.js";
import { navigate } from "./router.js";

const app = document.getElementById("app");

app.innerHTML = MainLayout();

navigate("home");

document.querySelectorAll("[data-page]").forEach(button => {

    button.addEventListener("click", () => {

        navigate(button.dataset.page);

    });

});*/

/*import "./firebase.js";

import { MainLayout } from "./ui.js";
import { HomePage } from "./pages/home.js";

const app = document.getElementById("app");

app.innerHTML = MainLayout();

document.getElementById("content").innerHTML = HomePage();*/

/*import "./firebase.js";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Our Place ❤️</h1>
`;*/

/*import { db } from "./firebase.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function testFirestore() {

    await setDoc(doc(db, "test", "hello"), {

        message: "Hello from Our Place ❤️",

        createdAt: new Date().toISOString()

    });

    console.log("Document created!");

}

testFirestore();*/