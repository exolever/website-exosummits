import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      metaTags: Array<{name: string, content: string}>
    };
  };
};

const meta = [
  { name: 'description', content: "ExO Summits | Inspire, educate and support leaders of the world for a better future." },
  { name: 'keywords', content: 'Exponential, bussiness, transform, change, rapid, tech' },
  { name: "viewport", content:"width=device-width, initial-scale=1.0"},
  { name: "apple-mobile-web-app-title", content: "exosummits"},
  { name: "google-site-verification", content: ""},
  { name: "theme-color", content: "#001E47"},
  { name: "msapplication-TileColor", content: "#001E47"},
  { property: "og:description", content: ""},
  { property: "og:image", content: "/social/banner.png"},
  { property: "og:title", content: "ExO Summits | Inspire, educate and support leaders of the world for a better future."}
]


const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={meta}
        >
        </Helmet>
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
