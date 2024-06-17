import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProfileDetailCard from './ProfileDetailCard';
import { getSingleProfile } from '../api/profileData';
import { useAuth } from '../utils/context/authContext';

export default function Bio() {
  const [userProfile, setUserProfile] = useState({});
  const router = useRouter();
  const { uid } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    if (router.pathname.startsWith('/discover/')) {
      getSingleProfile(uid).then(setUserProfile);
    } else {
      getSingleProfile(user.uid).then(setUserProfile);
    }
  }, [uid, user.uid, router.pathname]);

  return (
    <div>
      <ProfileDetailCard profileObj={userProfile} />

    </div>
  );
}
