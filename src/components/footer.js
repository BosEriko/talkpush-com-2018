import React from 'react'

const Footer = ({ title }) => (
  <div>
    <span>{title}</span> &copy; <span>{(new Date().getFullYear())}</span>
  </div>
)

export default Footer
