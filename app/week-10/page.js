"use client";
import React from 'react';
import  shoppingPage from "@/app/week-10/shopping-list/page";
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";


export default function page() {

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
    <main>
      <div className="pl-4 pt-4 bg-blue-950 h-screen text-white">
        <h1 className='pb-4 text-3xl font-extrabold'>Shopping List App</h1>
        {user ? 
        <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        <Link className='hover:underline' href="week-10/shopping-list">Continue to your Shopping List</Link>
        <div>
        <button type="submit" onClick={firebaseSignOut} className="hover:underline">Sign out</button>
        </div>
        </div> :
        <div>
        <button type="submit" onClick={gitHubSignIn}   className="hover:underline">Sign in with Github to continue</button>
        </div>
        }
        </div>
        </main>
    )
}