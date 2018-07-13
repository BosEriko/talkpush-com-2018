import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './style/global.scss'

const facebookLiveChatScript = () => {
  if (typeof window !== 'undefined') {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '303226573347841',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.12'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title} - {data.site.siteMetadata.description}</title>
      <meta name='keywords' content={data.site.siteMetadata.metaKeywords} />
      <meta property='og:site_name' content={data.site.siteMetadata.title} />
      <meta property='og:title' content={data.site.siteMetadata.title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={data.site.siteMetadata.image} itemprop='image' />
      <script>{facebookLiveChatScript()}</script>
    </Helmet>
    <Header title={data.site.siteMetadata.title} />
    <div>{children()}</div>
    <Footer title={data.site.siteMetadata.title} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        metaKeywords
        image
      }
    }
  }
`
