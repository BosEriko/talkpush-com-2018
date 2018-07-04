import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'index',
  animationSpeed: '800',
  animationOnce: 'true',
  pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
}

const IndexPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default IndexPage