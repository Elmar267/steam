import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAu0zYleSHBINBOrpl1kJdVALZtfXvE7hg",
    authDomain: "steam-final.firebaseapp.com",
    projectId: "steam-final",
    storageBucket: "steam-final.firebasestorage.app",
    messagingSenderId: "395773585108",
    appId: "1:395773585108:web:8e68f10a04f763b4a43d41"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();