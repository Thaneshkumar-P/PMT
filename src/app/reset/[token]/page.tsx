'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { verifyToken, setPassword as setPasswordAction } from './actions';

const ResetPassword = () => {
  const router = useRouter();
  const { token } = useParams() as { token: string };

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    (async function() {
      try {
        const verification: any = await verifyToken(token);
        console.log(verification)
        if (verification) {
          setUser(verification.fullname);
        } else {
          // router.push('/login');
        }
      } catch (err) {
        console.error('Error verifying token:', err);
        setError('An error occurred during token verification');
      }
    })();
  }, [token, router]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await setPasswordAction(password, token);
      if (response) {
        setSuccess('Password has been reset successfully');
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error('Error resetting password:', err);
      setError('An error occurred while resetting the password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      {user && (
        <h2 className="font-bold text-xl text-center mb-5">
          {user ? `Welcome, ${user}` : 'Reset Password'}
        </h2>
      )}
      <h2 className="font-bold text-xl text-center">Reset Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {!success && (
        <form onSubmit={handlePasswordReset}>
          <div className="relative mt-2 rounded-md col-span-2">
            <div className="mb-2">
              <label htmlFor="newPassword" className="font-medium">
                New Password
              </label>
            </div>
            <div className="relative">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
              />
            </div>
          </div>
          <div className="relative mt-2 rounded-md col-span-2 mb-5">
            <div className="mb-2">
              <label htmlFor="cNewPassword" className="font-medium">
                Confirm New Password
              </label>
            </div>
            <div className="relative">
              <input
                id="cNewPassword"
                name="cNewPassword"
                type="password"
                placeholder="Confirm New Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
              />
            </div>
          </div>
          <button
            className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold w-full"
            type="submit"
          >
            Set Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
