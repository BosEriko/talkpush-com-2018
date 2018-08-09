import React from 'react'
import Helmet from 'react-helmet'
// import '../pages-style/jobs.scss'

class JobsPage extends React.Component {
  pageVariables = {
    pageCode: 'jobs',
    pageDescription: 'Ready to accelerate recruitment? Talkpush is the leading productivity platform and the most high-volume chatbot for hiring talent via Facebook, WeChat and messaging.',
  }
  // botScrollFunction = () => window.scrollTo(0, document.body.scrollHeight)
  componentDidMount() {
    // (function () {
    //   var w = window;
    //   var d = document;

    //   function l() {
    //     var s = d.createElement("script");
    //     s.type = "text/javascript";
    //     s.async = true;
    //     s.src = "https://my.talkpush.com/website_bot?company_id=16";
    //     var x = d.getElementsByTagName("script")[0];
    //     x.parentNode.insertBefore(s, x);
    //   }
    //   if (w.attachEvent) {
    //     w.attachEvent("onload", l);
    //   } else {
    //     w.addEventListener("load", l, false);
    //   }
    // })()
    // window.botOnReceive = () => this.botScrollFunction()
    // window.botOnSend = () => this.botScrollFunction()
    document.getElementById("talkpush-bot-iframe").contentWindow.botOnReceive = () => console.log("received")
    document.getElementById("talkpush-bot-iframe").contentWindow.botOnSend = () => console.log("sent")
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>{this.pageVariables.pageCode}</title>
          <meta name='description' content={this.pageVariables.pageDescription} />
          <meta property='og:description' content={this.pageVariables.pageDescription} />
        </Helmet>
        {/* <div id="talkpush-bot" className="crb"></div> */}
        <div style={{ height: '1000px' }}></div>
        <iframe src="/talkpush-bot.html" frameBorder="0" style={{ height: '500px', width: '500px' }} id="talkpush-bot-iframe"></iframe>
      </div>
    )
  }
}

export default JobsPage
