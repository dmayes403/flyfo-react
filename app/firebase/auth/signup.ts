// https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email: string, password: string) {
    console.log('email', email)
    console.log('password', password)
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}