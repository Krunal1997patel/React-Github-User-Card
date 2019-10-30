import React from 'react';

class UserCard extends React.Component{

    render(){

        const data = this.props;

        return(
            <div key={data.id}>
                <h1>{data.name}</h1>
                <h2>{data.nickName}</h2>
                <img src={data.img} alt='User profil image'/>
                <p>{data.bio}</p>
                <p>{data.location}</p>
                <h4>{data.followers}</h4>
                <h4>{data.following}</h4>
            </div>
        )
    }
}

export default UserCard;