import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice';
import supabase from '../supabase';

export default function OAuth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => { (async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.log('Error retrieving session', error);
          return;
        }
        if (session && session.user) {
          const { user } = session;
          //console.log(user)
          const { full_name, avatar_url } = user.user_metadata || {};
          const email = user.email;
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: full_name || email,
              email: email,
              photo: avatar_url || '',
            }),
          });

          const data = await res.json();
          dispatch(signInSuccess(data));
          navigate('/');
        }
      } catch (err) {
        console.log('Could not complete sign in with Google', err);
      }
    })();
  }, [dispatch, navigate]);

  const handleGoogleClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:5173/sign-in'
        },
      });      
      if (error) throw error;
    } catch (error) {
      console.log('Could not sign in with Google', error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with Google
    </button>
  );
}
