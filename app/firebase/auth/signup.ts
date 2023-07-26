// https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
import { UserRegister } from "@/app/intro/register";
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { sendPostRequest } from "@/app/api/api";
import { RegType } from "@/app/enums/regType.enum";
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';


const auth = getAuth(firebase_app);

export default async function signUp(data: UserRegister, registerType: RegType, router: AppRouterInstance) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, data.email, data.password);
    await sendPostRequest(process.env.NEXT_PUBLIC_API_URL + '/users/create', { args: { firstName: data.firstName, lastName: data.lastName, email: data.email, regType: registerType.toString() } })

    if (registerType === RegType.CLIENT) {
      router.push('/landing')
    } else {
      router.push('/photographer')
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}