import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@gatsbyjs/reach-router';
import { useStaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.ico'

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
	graphql`
		query SEO {
			site {
				siteMetadata {
					defaultTitle: title
					defaultDescription: description
					siteUrl
					defaultImage: image
					}
				}
		}
	`
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <link rel="icon" href={favicon} />
	  <html lang="en" />
	  
	  <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
	  
      <meta property="og:title" content={seo.title} />
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

	  <meta name="google-site-verification" content="jrMeGXLyFKVKL_GF7D3-Gk4LnWYlLwTBpCiWT4hQnDk" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};

