import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'customers',
  pageDescription: 'Customers who want to accelerate their hiring turn to Talkpush',
}

const CustomersPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default CustomersPage
