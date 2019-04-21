import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

    mapUsers = () => {
        return this.props.users.map((user, i) => {
            return <li key={i}>{user.username}</li>
        });
    }

  render() {
    return (
      <div>
          {this.props.numberOfUsers}
        <ul>
          {this.mapUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { 
        users: state.users,
        numberOfUsers: state.users.length
    };
};
export default connect(mapStateToProps)(Users)
