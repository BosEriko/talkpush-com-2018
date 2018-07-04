import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <div>
    <ul style={{listStyleType: 'none'}}>
      <li><Link to="/augmented-recruiter/angeni">Angeni (AR)</Link></li>
      <li><Link to="/augmented-recruiter/ping">Ping (AR)</Link></li>
      <li><Link to="/augmented-recruiter/ram">Ram (AR)</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/accelerate">Accelerate</Link></li>
      <li><Link to="/career-bot-demo">Career Bot Demo</Link></li>
      <li><Link to="/chatbot">Chatbot</Link></li>
      <li><Link to="/crm">CRM</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Link to="/genpact-demo">Genpact Demo</Link></li>
      <li><Link to="/">Index</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
      <li><Link to="/privacy-applicant">Privacy Applicant</Link></li>
      <li><Link to="/privacy">Privacy</Link></li>
      <li><Link to="/terms">Terms</Link></li>
    </ul>
  </div>
)

export default Navigation
