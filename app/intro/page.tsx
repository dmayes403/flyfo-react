import bg from '../assets/Greece_Intro.jpeg'

const Button = ({ text }: { text: string }) => {
  return (
    <button className='ring-1 ring-white rounded p-8 hover:bg-blue-300'>
      {text}
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
          <span className='text-2xl'>New To FlyFo?</span>
          <div className='flex flex-col space-y-4 mt-4'>
            <Button text="I am a photographer" />
            <Button text="I need a photographer" />
          </div>
        </div>
      </div>
    </div>
  )
}