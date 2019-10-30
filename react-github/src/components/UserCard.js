import React from 'react';

class UserCard extends React.Component{

    render(){

        const data = this.props;

        return(
            <div className='user-card' key={data.id}>
                <h1>{data.name}</h1>
                <img src={data.img} alt='User profil image'/>
                <h2><span>Username</span> : {data.nickName}</h2>
                <p><span>Bio</span> : {data.bio}</p>
                <p><span>Location</span> : {data.location}</p>
                <div className='follow-following'>
                    <div className=''>
                        <h4>
                            <h5>Followers</h5>
                            <span>
                                {data.followers}
                            </span>
                        </h4>
                    </div>
                    <div>
                        <h4>
                        <h5>Following</h5>
                            <span>
                                {data.following}
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;