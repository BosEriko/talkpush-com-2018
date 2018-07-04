import React from 'react'
import Helmet from 'react-helmet'

const pageVariables = {
  pageCode: 'chatbot',
  pageDescription: 'Our chatbots creates Augmented Recruiters by automating every recruitment step from scheduling interviews, to collecting referrals, to onboarding new hires.',
}

const ChatbotPage = () => (
  <div>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <p>{pageVariables.pageDescription}</p>
  </div>
)

export default ChatbotPage
