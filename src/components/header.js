import React from 'react'
import Navigation from './navigation'

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <Navigation />
  </div>
)

export default Header