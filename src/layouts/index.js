import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

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

const googleAnalytics = () => {
  if (typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-46858485-2', 'auto');
  }
}

const facebookPixelCode = () => {
  if (typeof window !== 'undefined') {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }; if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    }(window,
      document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1690886631131130'); // Insert your pixel ID here.
    fbq('track', 'PageView');
    fbq('track', 'Lead');
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
      <script>{googleAnalytics()}</script>
      <script>{facebookPixelCode()}</script>
    </Helmet>
    <noscript>
      <img height='1' width='1' style={{ display: 'none' }} src='https://www.facebook.com/tr?id=1690886631131130&ev=PageView&noscript=1' />
    </noscript>
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
