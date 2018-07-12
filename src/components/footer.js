import React from 'react'

const Footer = ({ title }) => (
  <div>
    <span>{title}</span> &copy; <span>{(new Date().getFullYear())}</span>
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
  </div>
)

export default Footer
