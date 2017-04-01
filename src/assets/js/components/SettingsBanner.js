import React from 'react'
import {
  TrelloLogo
} from 'components'

const SettingsBanner = () => {
  return (
    <div className='jumbotron logo-container'>
      <div className='centered'>
        <span className='pre-logo'>Add to </span>
        <TrelloLogo size='large' />
      </div>
    </div>
  )
}

export default SettingsBanner
