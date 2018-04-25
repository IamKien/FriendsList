import React from "react";

class ShowList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };

    this.deleteFriend = this.deleteFriend.bind(this);
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
        <h3>Friends</h3>
        <ul>
          {this.props.names &&
            this.props.names.map((friend, index) => (
              <li key={index} id={index}>
                {friend}{" "}
                <button
                  onClick={() => {
                    this.deleteFriend(index);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ShowList;
