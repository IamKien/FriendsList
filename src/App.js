import React from 'react';
import ReactDOM from 'react-dom';
import ShowList from './ShowList'
import AddFriend from './AddFriend'

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Kien Doan',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    }
    this.addFriend = this.addFriend.bind(this)
    this.changeName = this.changeName.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }
  addFriend(friend){
    this.setState((state) => ({
      friends: state.friends.concat([friend])

    }))
  }
  changeName(e){
    this.setState({
      name: e.target.value
    })
  }
  deleteFriend(target_index) {
  this.setState(prevState => {
    return {
      friends: prevState.friends.filter((friends, index) => {
        return index !== target_index;
      })
    };
  });
}

  render() {
    return (
      <div>
        <h1> Hello: {this.state.name} </h1>
        <h3> Change Name: </h3>
        <input
        type="text"
        value={this.state.username}
        onChange={this.changeName}
        />
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends}
        deleteFriend={this.deleteFriend}
        />
      </div>
    )
  }
}

// AddFriend.propTypes: {
//   addNew: PropTypes.func.isRequired
// }


export default FriendsContainer;
