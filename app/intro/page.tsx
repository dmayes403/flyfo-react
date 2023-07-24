'use client';
import bg from '../assets/Greece_Intro.jpeg'
import { CameraIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import useSWRMutation from 'swr/mutation'
import { sendPostRequest } from '../api/api';

const Button = ({ text, children }: { text: string, children: any }) => {
  const { trigger, isMutating } = useSWRMutation(process.env.NEXT_PUBLIC_API_URL + '/signup', sendPostRequest)

  const handleClick = () => {
    trigger({ name: 'Dave', email: 'david@gmail.com' })
  }

  return (
    <button className='ring-1 ring-white rounded p-8 hover:bg-blue-300 flex justify-center' onClick={() => handleClick()}>
      <span>{text}</span>
      <span className='ml-2 w-6 h-6'>{children}</span>
    </button>
  )
}

export default function Intro() {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
    }}>
      <div className='h-screen translate-x-1/2 translate-y-1/2'>
        <div className='-translate-x-1/2 -translate-y-1/2 ring-1 ring-white rounded text-center p-12 w-max backdrop-blur-md'>
          <span className='text-3xl'>New To FlyFo?</span>
          <div className='flex flex-col space-y-4 mt-4'>
            <Button text="I am a photographer"><CameraIcon /></Button>
            <Button text="I need a photographer"><UserGroupIcon /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}