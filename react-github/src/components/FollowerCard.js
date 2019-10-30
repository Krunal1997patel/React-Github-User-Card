import React from 'react'

class FollowerCard extends React.Component {

    render(){
        return(
            <div key={this.props.id}>
                <img  src={this.props.img} alt='User avater Image'/>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default FollowerCard