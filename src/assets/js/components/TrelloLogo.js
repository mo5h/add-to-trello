import React, { PropTypes } from 'react'
import {openTrello} from 'libs/chrome'

/**
 * Trello Logo Component
 */
const TrelloLogo = ({ className, size }) => {
  const source = `assets/images/trello-logo-${size}.png`

  let classes = 'img img-responsive trello-logo'
  if (className) {
    classes += ' ' + className
  }

  return (
    <img
      className={classes}
      src={source}
      onClick={openTrello} />
  )
}

TrelloLogo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string.isRequired
}

export default TrelloLogo
