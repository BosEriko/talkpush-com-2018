import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'about',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
}

const AboutPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default AboutPage