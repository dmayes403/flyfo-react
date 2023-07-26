import { sendPostRequest } from '@/app/api/api'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import useSWRMutation from 'swr/mutation'
import { useForm } from "react-hook-form";
import signUp from '../firebase/auth/signup';
import { RegType } from '../enums/regType.enum';
import { useRouter } from 'next/navigation'

export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function Register({ setUserType, userType }: { setUserType: (val: undefined) => void, userType: RegType }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserRegister>();
  const router = useRouter()
  // const { trigger, isMutating } = useSWRMutation(process.env.NEXT_PUBLIC_API_URL + '/signup', sendPostRequest)

  // const handleClick = () => {
  //   trigger({ name: 'Dave', email: 'david@gmail.com' })
  // }

  const onSubmit = async (data: UserRegister) => {
    const { result, error } = await signUp(data, userType, router);
  }

  return (
    <div className='min-w-[400px]'>
      <button className='shadow-md flex px-4 py-1 ring-1 ring-white rounded items-center mx-auto' onClick={() => setUserType(undefined)}>
        <span className='w-5'><ArrowLeftIcon /></span>
      </button>

      <form className='flex flex-col mt-6 text-gray-500' id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <span className='text-lg mb-1 text-gray-500'>Register as a new user</span>
        <input className="rounded p-2 placeholder-gray-300" placeholder='first name' type="text" {...register('firstName')} />
        <input className="rounded p-2 mt-2 placeholder-gray-300" placeholder='last name' type="text" {...register('lastName')} />
        <input className="rounded p-2 mt-2 placeholder-gray-300" placeholder='email' type="text" {...register('email')} />
        <input className="rounded p-2 mt-2 placeholder-gray-300" placeholder='password' type="password" {...register('password')} />

        <button type="submit" form="signup-form" className='shadow-md flex px-4 py-1 ring-1 ring-white rounded items-center mx-auto mt-2 bg-orange-300 text-white'>
          Continue
        </button>
      </form>

    </div>
  )
}