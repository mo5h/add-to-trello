import React from 'react';
import TrelloApi from '../lib/trello-api';

export default class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

    TrelloApi.getOrgsAndBoards((err, orgs) => {
      this.setState({
        test: 'hello'
      });
    });
  }

  render() {
    return (
      <form className='add-card-form'>
        <p>{this.state.test}</p>
      </form>
    );
  }
}
