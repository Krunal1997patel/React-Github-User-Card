import React from 'react';
import axios from 'axios';
import UserGithub from './components/UserGithub';
import FollowerCard from './components/FollowerCard';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      myGithubInfo: [],
      followers: []
    }
  }

  componentDidMount(){
    axios
    .get(`https://api.github.com/users/krunal1997patel`)
    .then(resp => {
      this.setState({
        myGithubInfo: resp.data
      })
      
    })
    .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/krunal1997patel/followers`)
      .then(res => {
          this.setState({
            followers: res.data
          })
      })
      .catch(err => console.log(err));
  }


  render(){
    console.log(this.state.followers)
    return (
      <div className="App">
       <h1>My Github follower's</h1>
       <UserGithub myGithubInfo={this.state.myGithubInfo}  />
        <div>
          {
            this.state.followers.map(follower => (
              <FollowerCard
                id={follower.id}
                name={follower.login}
                img={follower.avatar_url}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
