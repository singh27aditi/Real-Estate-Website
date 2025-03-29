import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import supabase from '../supabase';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    avatar_url: '',
  });

  useEffect(() => {
    if (currentUser) {
      setProfile({
        username: currentUser.username || '',
        email: currentUser.email || '',
        avatar_url: currentUser.avatar_url || '',
      });
    }
  }, [currentUser]);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={profile.avatar_url}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input type='text' value={profile.username} placeholder='username' id='username' className='border p-3 rounded-lg' disabled/>
        <input type='email' value={profile.email} placeholder='email' id='email' className='border p-3 rounded-lg' disabled/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
          Update
        </button>
      </form>
      
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  );
}
