import * as React from 'react';
import Section from '../components/Section';

interface Column {
  title: string;
  description: Function;
  horizontal?: boolean;
  image: any;
  url: any;
}

interface Props {
  content: Column[]
}

const Link = (url) => {
  if(url !== false) {
    return <a target="_blank" className="site-btn text-white" href={url}>Learn More</a>
  } else {
    return <a target="_blank" className="site-btn grey text-white" >Coming Soon</a>
  }
}


const Vertical = ({ title, description, image, column, url }) =>
  <div className={`col-lg-${column}  text-center`}>
    <img src={image} alt={title} width="200" />
    <div className="about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
      {Link(url)}
    </div>
  </div>;

const Horizontal = ({ title, description, image }) =>
  <>
    <div className="col-lg-6  text-center">
      <img src={image} alt={title} />
    </div>
    <div className="col-lg-6 about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
    </div>
  </>;

const About: React.SFC<Props> = ({ content }) => {
  const column = Math.floor(12 / content.length);
  return (
    <Section>
     <div className="text-center">
        <h2>Upcoming Summits</h2>
      </div>
      <div className="row spad">

      {content.map(({ title, description, horizontal, image, url }) => {
        const props = { title, description, image, column, url };
        return horizontal ?
          <Horizontal {...props} key={title} /> : <Vertical {...props} key={title} />
      })}
      </div>
    </Section>
  )
};

export default About;
