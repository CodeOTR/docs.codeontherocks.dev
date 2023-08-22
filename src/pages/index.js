import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import simple from './../../static/img/simple.png';
import snippets from './../../static/img/cotr_snippets.png';
import social from './../../static/img/social_card.png';
import clean from './../../static/img/clean_cotr.png';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">State Management on Tap</h1>
        <p className="hero__subtitle">A simple library to help you build for 10 or 10 million</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Building 🛠️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
         <img src={social} alt="The basics" />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div className='hero padding-top--xl padding-bottom--sm'>
        <div className="container">
          <h1 className="hero__title">Easy to Learn</h1>
          <p className="hero__subtitle">Every screen is just a ViewModelBuilder connected to a ViewModel. That's it.</p>
        </div>
      </div>
      <img src={simple} alt="The basics" />
    

      <div className='hero padding-top--xl padding-bottom--sm'>
        <div className="container">
          <h1 className="hero__title" style={{ textAlign: 'right' }}>Production Ready</h1>
          <p className="hero__subtitle" style={{ textAlign: 'right' }}>Code on the Rocks adheres to the Clean Architecture principles. <br></br>Build bug-resistant apps that can scale.</p>
        </div>
      </div>
      <img src={clean} alt="The basics" />
      <div className='hero padding-top--xl'>
        <div className="container">
          <h1 className="hero__title" >Efficient</h1>
          <p className="hero__subtitle" >Use snippets, the CotR CLI, and app templates to go blazingly fast 🔥</p>
          <div>
            <button class="button button--primary button--outline button--lg">
              Check out the CLI
            </button>
          </div>
        </div>
      </div>
      <img src={snippets} alt="Android Studio Live Templates" />
    </Layout>
  );
}
