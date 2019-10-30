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
      followers: [],
      name: ''
    }
  }


  componentDidMount(){
    axios
    .get(`https://api.github.com/users/Krunal1997patel`)
    .then(resp => {
      this.setState({
        myGithubInfo: resp.data,
      })
      
    })
    .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/Krunal1997patel/followers`)
      .then(res => {
          this.setState({
            followers: res.data
          })
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      name: e.target.value
    });
  };

  newUser = () => {
    axios
    .get(`https://api.github.com/users/${this.state.name}`)
    .then(resp => {
      this.setState({
        myGithubInfo: resp.data,
      })
      
    })
    .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.name}/followers`)
      .then(res => {
          this.setState({
            followers: res.data
          })
      })
      .catch(err => console.log(err));
  };



  render(){
    // console.log(this.state.name)
    return (
      <div className="App">

      <h1 className='title'>My Github follower's</h1>

      <input type="text" value={this.state.name} placeholder='Username' onChange={this.handleChanges} />
      <br/>
      <button onClick={this.newUser}>Search</button>

       <UserGithub myGithubInfo={this.state.myGithubInfo}  />

        <h2>Followers</h2>

        <div className='small-card'>
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
