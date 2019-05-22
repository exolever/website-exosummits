import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';
import HubSpotForm from '../components/forms/HubSpotForm';
import About from '../components/About';

// import * as sectionBg from '../img/bg-61-img.jpg';
import * as sectionBg from '../img/bg-summit.jpg';
import * as sectionBgAlt from '../img/bg-mountain.jpg';

import * as dubai from '../img/dubai.png';
import * as mexico from '../img/mexico.png';
import * as nyc from '../img/nyc.png';


interface State {
  style: {
    opacity: number;
  }
};
const DATA = {
  en: {
    hero: {
      title: 'EXO SUMMITS',
      description: 'ExO Summits inspire, educate and support leaders, innovators and entrepreneurs to transform organizations, institutions and the world for a better future.',
      btnLabel: 'Create your own Summit',
    },
    about: {
      features: [
        {
          title: 'Dubai, April 18-20',
          description: () => '',
          image:dubai,
          url: `http://www.openexodubai.com`
        },
        {
          title: 'NYC, July 19-20-21',
          description: () => '',
          image: nyc,
          url: `http://novussummit.org`
        },
        {
          title: 'Mexico, September 12',
          description: () => '',
          image: mexico,
          url: false
        }
      ]
    },
    form: {
      title: () => <>Organize a summit in your country</>,
      labels: {
        required: 'indicates required',
        email: 'Email Address',
        name: 'Name',
        location: 'Preferred Location of Summit',
        dates: 'Dates of the summit',
        description: 'Why would you like to host this summit?',
        linkedIn: 'LinkedIn URL',
        button: 'Create summit'
      },
      fields: {
        groups: [
          { id: 8192, hidden: true },
        ],
        groupTitle: 'I want to know about:',
      },
      messages: {
        success: 'Thanks for sending your summit info!',
        error: 'Please try it later, again.'
      }
    },
    footer: {
      main: { text: 'OpenExO', url: 'https://www.openexo.com/' },
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
            title="ExO Summit"
            subtitle={DATA.en.hero.description}
            backgroundImage={sectionBg}
            cta={{ text: DATA.en.hero.btnLabel, target: '#community' }}
          />

        <About content={DATA.en.about.features.slice(0, 3)} />
          <HubSpotForm
            formBg={sectionBgAlt}
            title={DATA.en.form.title()}
          />
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
