import React from 'react'
import  "./profile.css"

const MyProfilePage = () => {
  return (
    <div className='body'>
        <div className="profile">
      <section className="profile-simple">
  <div className="container">
    <div className="img-avatar">
      <img className="profile-avatar" alt="msdesigns" src="https://cdn.dribbble.com/users/1993092/avatars/normal/ff1f89f9c3c8038247fcce607a585686.jpeg?1573311855"/>
    </div>
    <div className="content">
      <h1 className="profile-name">msdesigns</h1>
        <p className="profile-locality">Chandīgarh, India</p>
        <p className="profile-specializations">
          Illustration, UI / Visual Design, UX Design / Research
        </p>
    </div>
  </div>
</section>

  </div>
  <div className="line"></div>
    </div>
  )
}

export default MyProfilePage