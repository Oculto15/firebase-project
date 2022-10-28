
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBr-Umri6VmhRdk5HGONjyJ93rst4Siaxw",
authDomain: "cloud-c64af.firebaseapp.com",
projectId: "cloud-c64af",
storageBucket: "cloud-c64af.appspot.com",
messagingSenderId: "922594900743",
appId: "1:922594900743:web:636dd1f67c0eb2e0d363a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const db = getDatabase();

// ------------------------ CALL VARIABLES -------------------------//

var namebox = document.getElementById("namebox")
var rollbox = document.getElementById("rollbox")
var secbox = document.getElementById("sectionbox")
var gentbox = document.getElementById("genbox")

var isnBtn = document.getElementById("insbtn")
var selBtn = document.getElementById("selbtn")
var updBtn = document.getElementById("updbtn")
var delBtn = document.getElementById("delbtn")


// ------------------------ Insert Data -------------------------//

function InsertData() {
    set(ref(db, "Students/"+ rollbox.value), {
        NameOfStd: namebox.value,
        ID: rollbox.value,
        Section: secbox.value,
        Gender: gentbox.value
    })
    .then(()=>{
        alert("Data Store successfully")
    })
    .catch((error)=>{
        alert("Unsuccessful, error"+error);
    });
}


// ------------------------ Select Data -------------------------//

function SelectData(){
    const dbref = ref(db);

    get(child(dbref,"Students/"+ rollbox.value))
    .then ((snapshot)=>{
        if(snapshot.exists()){
            namebox.value = snapshot.val().NameOfStd;
            secbox.value = snapshot.val().Section;
            gentbox.value = snapshot.val().Gender;
        }
        else{
            alert("No Data Found")
        }
    })
    .catch((error)=>{
        alert("Unsuccessful, error"+error);
    })
}


// ------------------------ Update Data -------------------------//

function UpdateData() {
    update(ref(db, "Students/"+ rollbox.value), {
        NameOfStd: namebox.value,
        Section: secbox.value,
        Gender: gentbox.value
    })
    .then(()=>{
        alert("Data Updated successfully")
    })
    .catch((error)=>{
        alert("Unsuccessful, error"+error);
    });
}


// ------------------------ Delete Data -------------------------//

function DeleteData() {
    remove(ref(db, "Students/"+ rollbox.value))
    .then(()=>{
        alert("Data Removed successfully")
    })
    .catch((error)=>{
        alert("Unsuccessful, error"+error);
    });
}


// ------------------------ Button Events -------------------------//

isnBtn.addEventListener('click', InsertData);
selBtn.addEventListener('click', SelectData);
updBtn.addEventListener('click', UpdateData);
delBtn.addEventListener('click', DeleteData);