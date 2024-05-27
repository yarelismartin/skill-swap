/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deletePost } from '../api/postData';

export default function PostCard({ postObj, onUpdate }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // State variable for menu visibility, initially hidden

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  // Function to toggle menu visibility, It doesn't perform a strict logical NOT operation, but rather flips the current value of the state variable to its opposite value without explicitly checking its current state.

  const deleteAPost = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postObj.firebaseKey).then(onUpdate);
    }
  };

  return (
    <div>
      <div className="post-card">
        <h2 className="card-title">{postObj.title}</h2>
        <div className="card-header">
          {/* <img className="avatar" src="/profile-pic.jpg" src={profileObj.image} alt="User Avatar" /> */}
          <div className="user-info">
            {/* <span className="user-name">{profileObj.name}</span> */}
            <span className="time-created">{postObj.timestamp}</span>
          </div>
          <div className="menu-container">
            <button type="button" className="menu-button" onClick={toggleDropdown} aria-label="Open options menu">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </button>
            {isDropdownVisible && (
            <div className="dropdown-menu" style={{ display: 'block' }}>
              <button type="button" className="dropdown-item">
                <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.7029 1.87868L10.1171 0.292893C9.72658 -0.0976311 9.09342 -0.0976311 8.70289 0.292893L7.499 1.495L10.499 4.495L11.7029 3.29289C12.0934 2.90237 12.0934 2.2692 11.7029 1.87868ZM9.085 5.909L6.085 2.909L0 8.995V12H2.994L9.085 5.909Z" fill="black" />
                </svg>
                Edit Post
              </button>
              <button type="button" className="dropdown-item delete" onClick={deleteAPost}>
                <span>
                  <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 1V0H4V1H1V3H11V1H8ZM9.33333 12L10 4H2L2.66667 12H9.33333Z" fill="black" />
                  </svg>
                </span>
                Delete
              </button>
            </div>
            )}
          </div>
        </div>
        <div className="card-content">
          <p>{postObj.content}
          </p>
        </div>
        <div className="card-footer">
          <span className="comment">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00002 18.6667H18.6667V16H8.00002V18.6667ZM8.00002 14.6667H24V12H8.00002V14.6667ZM8.00002 10.6667H24V8H8.00002V10.6667ZM2.66669 29.3333V5.33333C2.66669 4.6 2.92802 3.972 3.45069 3.44933C3.97246 2.92756 4.60002 2.66667 5.33335 2.66667H26.6667C27.4 2.66667 28.028 2.92756 28.5507 3.44933C29.0725 3.972 29.3334 4.6 29.3334 5.33333V21.3333C29.3334 22.0667 29.0725 22.6947 28.5507 23.2173C28.028 23.7391 27.4 24 26.6667 24H8.00002L2.66669 29.3333Z" fill="#34364A" />
            </svg>

          </span>
        </div>
      </div>

    </div>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    timestamp: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};