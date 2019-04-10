import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Section: React.SFC<Props> = ({ children }) => {

  return (
    <section className="about-section spad">
      <div className="container">
        {children}
      </div>
    </section>
  )
};

export default Section;
