// https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
    console.log('signout')
    let result = null,
        error = null;
    try {
        result = await signOut(auth);
        console.log('result', result)
    } catch (e) {
        error = e;
    }

    return { result, error };
}