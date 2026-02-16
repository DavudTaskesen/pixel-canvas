const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let color = document.getElementById("colorPicker").value;

document.getElementById("colorPicker").addEventListener("input", (e) => {
    color = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left));
    const y = Math.floor((e.clientY - rect.top));

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 10, 10); // 10x10 pixel blok
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXJwxFpZ0XeQTM1wn7E04rt9DTT6DLbQE",
  authDomain: "pixel-canvas-a1612.firebaseapp.com",
  projectId: "pixel-canvas-a1612",
  storageBucket: "pixel-canvas-a1612.firebasestorage.app",
  messagingSenderId: "757681480827",
  appId: "1:757681480827:web:9ebe3eeb3158b39af2aede",
  measurementId: "G-QD9XJD7LZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

set(ref(db, "pixels/" + index), colorPicker.value);

