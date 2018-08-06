import React from 'react'
import Helmet from 'react-helmet'
import styles from '../../pages-style/our-team.module.scss'
import defaultPicture from '../../pages-images/our-team/default.png'
import heartIcon from '../../pages-images/our-team/heart.svg'

const pageVariables = {
  pageCode: 'our-team-yuan',
  pageDescription: 'Talkpush was built to give everyone a chance to let their talent talk. Removing barriers between job seekers and employers has been our mission from day one.',
}


const OurTeamPage = () => (
  <div className={styles.block}>
    <Helmet>
      <title>{pageVariables.pageCode}</title>
      <meta name='description' content={pageVariables.pageDescription} />
      <meta property='og:description' content={pageVariables.pageDescription} />
    </Helmet>
    <div className={styles.blockHeader}></div>
    <div className={styles.blockExperiences}>
      <div className="container">
        <div className={styles.blockExperiencesUserDetails}>
          <div className={styles.blockExperiencesUserDetailsImage}>
            <img src={defaultPicture} alt="Yuan Yim"/>
          </div>
          <div className={styles.blockExperiencesUserDetailsData}>
            <h3 className="global-hero-green-glow p-0">Yuan Yim</h3>
            <p className="m-0 p-0">Head of Resource and Community</p>
          </div>
          <div className={styles.blockExperiencesUserDetailsHeart}>
            <img src={heartIcon} alt="Heart"/>
          </div>
        </div>
        <div className={styles.blockVideoHolder}>
          <div className={styles.blockVideoHolderVideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className={styles.blockExperiencesSpeech}>
          <p>I joined Talkpush almost 3 years ago because of a good friend Bastian (Hi Basti!) referred me. The timing was perfect since I was exploring new opportunities and figuring out which direction I wanted my career to take. (Making smart career choices... a common dilemma for any 20- something-year-old).</p>
          <p>I previously worked in outsourcing, real estate and a couple of media companies. None of these previous jobs could really have prepared me for what was to come. Everything that I knew from the years of work just flew off the window, I was clueless. I knew that I got myself into something that I could have imagined. It was scary, but just went with it, because life is all about new experience, right?</p>
          <p>And so there I was sitting in our small office in Makati (we’ve moved to bigger place since) with a bunch of tasks that would have been enough to fill the agenda of 3 full-time staff... In my head a voice was screaming “Now is the time for you to wear different hats on the job”. In the office with me were a handful of stellar individuals, the beginning of a core team, trying to figure out exactly what our job entailed. We knew we had something promising, but there was no how-to guide on how to get it done.</p>
          <p>Fast forward to today.</p>
          <p>First of all I am no longer clueless. We were also able to grow the business 3x last year (and 3x the year before) and now have customers in 16 countries (and counting...), in the process growing our headcount from 10 to over 30 (by the way, we’re hiring!). Of course, it was not an easy process. From then till now, we have gone through rough patches and a lot of problems, challenges that kept us up at night, putting in long work hours, with the occasional feeling of dismay and frustration. That’s really how it’s like in the early phases: lots of trial and errors. I have had my fair share of shameful failures and sparkling achievements. I have also learned how to work more independently and autonomously because we are given the liberty to work from anywhere we want to. Not being tied to the desk has its perks — I can travel and work from different places and I don’t have to worry as much about the crazy traffic here in Manila.</p>
          <p>
Working in a startup means finding solutions where you least expect it and having the ability to push your boundaries. You will also be able to explore your skill sets in a lot of unconventional ways — and even if you think you know enough, you don’t. You learn something new everyday, as the business grows.</p>
        </div>
      </div>
    </div>
  </div>
)

export default OurTeamPage
