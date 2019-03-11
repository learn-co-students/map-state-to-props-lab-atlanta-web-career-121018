import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.users.map(user => <li key={this.props.users.length }>{user.username}</li>)}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, items: state.users.length }
}

export default connect(mapStateToProps)(Users)
