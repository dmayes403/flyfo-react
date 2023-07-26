'use client';
import signOutUser from '../firebase/auth/signout';

export default function Photographer() {
  return (
    <>
      <div>Photographer!</div>
      <button onClick={() => signOutUser()}>Signout</button>
    </>
  )
}