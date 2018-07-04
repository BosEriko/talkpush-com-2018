import React from 'react'

const Footer = ({ title }) => (
  <div style={{ textAlign: 'center' }}>
    <span>{title}</span> &copy; <span>{(new Date().getFullYear())}</span>
  </div>
)

export default Footer
