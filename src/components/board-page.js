import React from 'react';
import Board from 'react-trello';
import {connect} from 'react-redux';
import { fetchBoardData, fetchApiData } from '../actions/board-data'

export class BoardPage extends React.Component {
    render() {
    return <Board data={fetchBoardData()} />
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { 
    boardData: state.boardData,
    fakeData: state.fakeData }
}

const mapDispatchToProps = {
  fetchBoardData
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage)
