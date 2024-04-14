"use client"
import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
import ShoppingListPage from "@/app/week-8/shopping-list/shoppinglist";


export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const handleSignIn = async () => await gitHubSignIn();
    const handleSignOut = async () => await firebaseSignOut();
    return (
        <main>
            <div className="flex-col justify-left bg-black min-h-screen text-white  h-full">
                <div>
                    <h1 className="text-4xl font-bold mb-6">Shopping List App</h1>
                    <p>{user?.displayName}</p>
                </div>
                <div className="flex justify-left">
                    {user ? (
                        <div className="flex flex-col ">
                            <p>Signed in as ({user?.email}).</p>
                            <button className="text-white" onClick={handleSignOut}>Sign Out</button>
                            <div className='text-white hover:underline'>
                            
                            <Link className='hover:underline' href="week-8/shopping-list">
                                Continue to your Shopping List </Link>   </div>  
                            </div>                                                                                                                                          
                              ) : (
                        <button className="text-white" onClick={handleSignIn}>
                            {user ? "Signed in as " : "Sign in with GitHub"} {user?.email}
                        </button>
                    )}
                </div>
            </div>
            {user && <ShoppingListPage />}
        </main>
    );
}
