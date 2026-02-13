import "./App.css"
import { useState } from 'react'
import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton
} from '@clerk/clerk-react'

function App() {
  return (
    <>
      <h1>Welcome to the App</h1>

      <SignedOut>
        <SignInButton mode="modal" />
        
      </SignedOut>

      <SignedIn> 
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App
