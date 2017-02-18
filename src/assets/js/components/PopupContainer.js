import React from 'react';
import storage from 'libs/storage';
import {openSettings} from 'libs/chrome';
import { deauthorize } from 'libs/trello-api';

import {
  TrelloLogo,
  AddCardForm
} from 'components';

export default class PopupContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  logoutHandler() {
    deauthorize();
    openSettings();
  }

  render() {
    return (
      <div className='Popup container'>
        <div className='row'>
          <TrelloLogo size='small' />
        </div>

        <div className='row'>
          <div className="col-md-12">
            <AddCardForm />
          </div>
        </div>

        <div className='row'>
          <div className="col-md-12">
            <a className="pull-left" href="#" onClick={openSettings}>
              Settings
            </a>
            <a className="pull-right" href="#" onClick={this.logoutHandler}>
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}
