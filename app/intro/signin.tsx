import { useForm } from 'react-hook-form';
import signIn from '../firebase/auth/signin';

interface UserSignIn {
  email: string;
  password: string;
}

export default function SignIn({ setNewUser }: { setNewUser: (val: boolean) => void }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserSignIn>();

  const onSubmit = async (data: UserSignIn) => {
    // const { result, error } = await signUp(data, userType, router);
    const { result, error } = await signIn(data.email, data.password);
  }

  return (
    <div className='min-w-[400px]'>
      <form className='flex flex-col mt-6 text-gray-500' id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <span className='text-lg mb-1 text-gray-500'>Sign in</span>
        <input className="rounded p-2 mt-2 placeholder-gray-300" placeholder='email' type="text" {...register('email')} />
        <input className="rounded p-2 mt-2 placeholder-gray-300" placeholder='password' type="password" {...register('password')} />

        <div className='text-white mt-2'>New user? Click <span className='text-blue-600 underline hover:cursor-pointer' onClick={() => setNewUser(true)}>here</span> to register</div>

        <button type="submit" form="signup-form" className='shadow-md flex px-4 py-1 ring-1 ring-white rounded items-center mx-auto mt-2 bg-orange-300 text-white'>
          Continue
        </button>
      </form>

    </div>
  )
}