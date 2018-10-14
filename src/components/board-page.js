import React from 'react';
import Board from 'react-trello';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
          {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  }

  export class BoardPage extends React.Component {
    render() {
      return <Board data={data} />
    }
  }

  const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

  export default withRouter(connect(mapStateToProps)(BoardPage));