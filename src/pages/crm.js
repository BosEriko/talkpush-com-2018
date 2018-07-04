import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'crm',
  animationSpeed: '800',
  animationOnce: 'true',
  pageDescription: 'Candidate Relationship Management for the messaging age',
}

const CrmPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default CrmPage
