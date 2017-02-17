import React from 'react';
import storage from '../lib/storage';
import TrelloLogo from './TrelloLogo';
import TrelloApi from '../lib/trello-api';

export default class PopupContainer extends React.Component {
  constructor(props) {
    super(props);

    const settings = storage.getSettings();

    this.state = {
      settings
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <TrelloLogo size='small' className='js-trello-link' />
          <AddCardForm settings={this.state.settings} />
        </div>
      </div>
    );
  }
}
