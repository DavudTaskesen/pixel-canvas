const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");

const size = 64; // 64x64 büyük canvas

// Grid oluştur
for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("click", () => {
        div.style.backgroundColor = colorPicker.value;
    });

    grid.appendChild(div);
}

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
