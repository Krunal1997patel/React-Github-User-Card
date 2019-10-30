import React from 'react';
import UserCard from './UserCard';

class UserGithub extends React.Component{

    render(){
        
        const info = this.props.myGithubInfo
        // console.log(info);
        return(
            <div>
                <UserCard
                id={info.id}
                name={info.name}
                img={info.avatar_url}
                bio={info.bio}
                nickName={info.login}
                location={info.location}
                followers={info.followers}
                following={info.following}
                />
            </div>
        )
    }
}

export default UserGithub;