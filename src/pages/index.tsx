import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Section from '../components/Section';
import HighlightSection from '../components/HighlightSection';
import IndexLayout from '../layouts';
import LeaderForm from '../components/forms/LeaderForm';

import * as sectionBg from '../img/bg-61-img.jpg';
import * as sectionBgAlt from '../img/bg-61-img-alt.jpg';
import * as formBg from '../img/bg.jpg';
import * as dreamerImage from '../img/dreamer.jpg';
import * as finderImage from '../img/finder.jpg';
import * as diagram from '../img/leadership-diagram.png';
import * as jaroslav from '../img/jaroslav2.png';

interface State {
  style: {
    opacity: number;
  }
};
const DATA = {
  en: {
    hero: {
      title: 'EXO LEADERSHIP',
      description: 'The World is changing faster than anyone could predict. ​Are you ready to lead your organization into the Future?',
      btnLabel: 'Join the Community',
    },
    about: {
      features: [
        {
          title: 'Why choose our company?',
          description: () => `We offer premium services to help leaders develop the necessary mindset, skills and capabilities to transform themselves and their organisations for the Future.`
        },
        {
          title: '',
          description: () => <><h4>Leaders</h4> <p>improve the status quo and serves as a role-model to others for their behaviour</p>
            <h4>Leadership paradigms</h4> <p>shape how leaders perceive the world and how they think and act</p>
            <h4>ExO Leader </h4><p>takes an active role in creating a better future shaped by the rapid growth of
            exponential technologies and consistently behaves in alignment with this purpose.</p>
            <h4>ExO Leadership</h4><p>is a new paradigm of leadership which is essential for humanity to steer towards a positive version of the future which fully benefits from the available opportunities while avoiding dangers, challenges and overcoming past limitations.</p>
          </>
        },
        {
          title: 'ExO Leadership Book',
          description: () => `We are currently working on codifying our experience and insights about this new leadership paradigm
          ​into a brand new book which will be published in 2019.`,
        },
        {
          title: 'Jaroslav Dokoupil',
          description: () => <>
            <div className="paragraph"><strong>ExO Leadership framework</strong> has been developed by Jaroslav in collaboration with a global ecosystem of thought-leaders, entrepreneurs, consultants and leadership practitioners.<br /><br />&#8203;Jaroslav&nbsp;is an&nbsp;<strong>entrepreneur, consultant, coach&nbsp;</strong>and&nbsp;<strong>trainer</strong>&nbsp;working at the intersection of&nbsp;<strong>leadership, innovation, technology</strong>&nbsp;and&nbsp;<strong>sustainability</strong>. He has&nbsp;<strong>15 years of global experience</strong>&nbsp;having worked with clients in over <strong>30 countries</strong>. During his career, he has designed and delivered close to&nbsp;<strong>10,000 hours</strong>&nbsp;of programmes, sessions and workshops to corporate, entrepreneurial, public and NGO clients.<br /><br />Jaroslav currently acts as a <strong>CEO</strong> of <strong><a href="http://www.openexo.com" target="_blank">OpenExO</a></strong>, a global transformation ecosystem building a better future. He has also co-founded and manages&nbsp;<a href="http://www.rqgenesis.com/" target="_blank"><strong>RQ Genesis</strong></a>, an innovative consultancy helping leaders to create sustainable value and for over 10 years, has worked with&nbsp;<a href="http://www.futureconsiderations.com/" target="_blank"><strong>Future Considerations</strong></a>, a boutique leadership development consultancy based in London. He also spent&nbsp;6 years at various leadership positions at <strong><a href="http://www.aiesec.org" target="_blank">AIESEC</a></strong>, largest youth-lead leadership development organization in the world and took part in one of the largest-ever cultural transformation programme for a&nbsp;global financial institution touching &nbsp;<strong>200,000 people worldwide.</strong><br /><br />Jaroslav has lived and worked in&nbsp;<strong>UK, US, Spain, Belgium, Netherlands</strong>&nbsp;and the&nbsp;<strong>Czech Republic</strong>&nbsp;and has travelled to <strong>50</strong> countries to date.</div>
          </>
        },
      ]
    },
    form: {
      title: () => <>ExO Leadership contact list</>,
      labels: {
        required: 'indicates required',
        submit: 'Subscribe',
        email: 'Email Address',
        name: 'Name',
        location: 'Preferred Location of Summit/Workshop',
        linkedIn: 'LinkedIn URL',
        button: 'Subscribe'
      },
      fields: {
        groups: {
          leadership: { id: 2, hidden: true },
          leadershipBook: { id: 32, label: 'ExO Leadership Book' },
          leadershipServices: { id: 16, label: 'ExO Leadership Services' },
          leadershipWorkTogether: { id: 64, label: 'Ways to work together' },
          leadershipOther: { id: 128, label: 'Other' }
        },
        groupTitle: 'I want to know about:',
      },
      messages: {
        success: 'Thanks for joining our community!',
        error: 'Please try it later, again.'
      }
    },
    footer: {
      main: { text: 'OpenExO', url: 'https://www.exolever.com/' },
      links: [
        { text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        { text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        { text: 'ExO Canvas', url: 'https://www.exocanvas.com/' },
      ],
      copyright: (year = new Date().getFullYear()) =>
        <>
          Building Exponential Organizations - OpenExO<sup>®</sup> {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
        </>
    }
  }
};
class IndexPage extends React.Component<any, State> {
  render() {
    return (

      <IndexLayout>
        <Page>
          <Hero
            title="ExO Leaders"
            subtitle={DATA.en.hero.description}
            backgroundImage={sectionBg}
            cta={{ text: 'Join the Community', target: '#community' }}
          />
          <div className="intro container">
            <h2>{DATA.en.about.features[0].description()}</h2>
          </div>

          <Section>
            <div className="row section-1">
              <div className="col-lg-12 text">
                <div>{DATA.en.about.features[1].description()}</div>
              </div>

            </div>
          </Section>
          <HighlightSection title={"ExO Leadership Book"} tagline="" backgroundImage={sectionBgAlt}>
            <div className="text-white">
              <h4 className="text-center">We are currently working on codifying our experience and insights about this new leadership paradigm
​into a brand new book which will be published in 2019.</h4>
            </div>
          </HighlightSection>
          <Section>
            <div className="row  section-2">
              <div className="col-lg-12 ">
                <img src={diagram} alt="exo" />
              </div>
            </div>
          </Section>

          <LeaderForm
            title={DATA.en.form.title()}
            labels={DATA.en.form.labels}
            fields={DATA.en.form.fields}
            messages={DATA.en.form.messages}
          />


          <Section>
            <div className="row">
              <div className="col-lg-6 about-text-image">
                <img src={jaroslav} alt="" />
              </div>
              <div className="col-lg-6">
                <h3>{DATA.en.about.features[3].title}</h3><br />
                {DATA.en.about.features[3].description()}
              </div>
            </div>
          </Section>

          <Footer links={DATA.en.footer.links} copyright={DATA.en.footer.copyright} mainLogo={DATA.en.footer.main} />
        </Page>
        <style>
          {
            `body {
                transition: opacity ease 0.5s;
                opacity: 1;
              }`
          }
        </style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
