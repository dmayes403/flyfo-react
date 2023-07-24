// https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
import { UserRegister } from "@/app/intro/register";
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { sendPostRequest } from "@/app/api/api";

const auth = getAuth(firebase_app);


export default async function signUp(data: UserRegister) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await sendPostRequest(process.env.NEXT_PUBLIC_API_URL + '/signup', { args: { name: data.firstName, email: data.email } })
    } catch (e) {
        error = e;
    }

    return { result, error };
}