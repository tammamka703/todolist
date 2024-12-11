import React from 'react'
import "../Account/AccountPage.css"; // You can create this CSS file to apply styles
import imgPhoto from "../Assests/images/profileimg.jpg"
const AccountPage = () => {
  return (
    <div className='account'>
      <div className="account-container">
        <h1>Welcome to Your Account</h1>
        <div className="account-details">
          <div className="detail-item">
            <div className='profile-img'>
              <img src={imgPhoto}/>
            </div>
            <div className='profile-details'>
              <h2>Username</h2>
              <p>JohnDoe123</p>
            </div>
            <div className='profile-details'>
              <h2>Email</h2>
              <p>johndoe@example.com</p>
            </div>
          </div>
          <div className="detail-item">
            <div className='user-achivements'>
              <h5>your Achivements</h5>
              <ul>
                <li>
                  <div className='achivement-card'>

                  </div>
                </li>
                <li>
                  <div className='achivement-card'>

                  </div>
                </li>
                <li>
                  <div className='achivement-card'>

                  </div>
                </li>
              </ul>
            </div>
            
          </div>
          {/* Add more account details as needed */}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

