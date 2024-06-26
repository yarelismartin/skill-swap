/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function ProfileDetailCard({ profileObj }) {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div className="profile-detail-body pop-font">
      <div className="profile-card">
        <img src={profileObj.image} alt="profile pic" className="profile-card__image" />
        <div className="profile-card__text-container">
          <h2 className="profile-card__name">{profileObj.name}</h2>
          <p className="profile-card__skill">{profileObj.skill}</p>
          <p className="profile-card__location">{profileObj.location}</p>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {profileObj.uid === user.uid ? (
          <button
            type="button"
            onClick={() => router.push(`/profile/edit/${profileObj.uid}`)}
            style={{
              color: 'white', fontSize: '10px', width: '130px', height: '30px', backgroundColor: '#3F525B', border: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px', padding: '10px',
            }}
          >
            Edit Profile
            <span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7029 1.87868L10.1171 0.292893C9.72658 -0.0976311 9.09342 -0.0976311 8.70289 0.292893L7.499 1.495L10.499 4.495L11.7029 3.29289C12.0934 2.90237 12.0934 2.2692 11.7029 1.87868ZM9.085 5.909L6.085 2.909L0 8.995V12H2.994L9.085 5.909Z" fill="white" />
              </svg>
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push(`/message/${profileObj.uid}/${user.uid}`)}
            style={{
              color: 'white', fontSize: '10px', width: '130px', height: '30px', backgroundColor: '#3F525B', border: 'none', borderRadius: '20px', margin: '15px', textAlign: 'center',
            }}
          >
            Connect with {profileObj.name?.split(' ')[0]}
          </button>
        )}
        { router.pathname.startsWith('/profile') && (
          <button
            type="button"
            onClick={signOut}
            style={{
              color: 'white', fontSize: '10px', width: '130px', height: '30px', backgroundColor: '#b82b40', border: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px', padding: '10px',
            }}
          >Sign Out
          </button>
        )}

      </div>

      <div className="profile-card__bio">
        <div className="profile-card__bio-content">
          <p>{profileObj.bio}</p>
        </div>
      </div>
    </div>
  );
}

ProfileDetailCard.propTypes = {
  profileObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    skill: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
