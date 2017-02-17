import React from 'react';

// Settings: img.img-responsive.logo(src='assets/images/trello-logo-large.png', alt='Trello Logo')
// Popup: img.center-block.trello-logo.js-trello-link(src='assets/images/trello-logo-small.png', alt='Trello Logo')
// TrelloLogo
export default (props) => {
  const source = `assets/images/trello-logo-${props.size}.png`;

  let classes = 'img img-responsive trello-logo ';
  if (props.className) {
    classes += props.className;
  }

  return (
    <img
      className={classes}
      src={source}
      onClick={props.onClick}
    />
  );
};
