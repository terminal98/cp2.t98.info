import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1">
          <img src="/img/logo2.svg" className={clsx('hero__title', styles.heroTitle)} />
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubTitle)}>
          写真・動画の撮影<br />カメラやコスプレに関する同人誌の自主制作
        </p>
      </div>
      <img src="/img/hero2023.png" alt="" className={clsx(styles.heroChara)} />
    </header>
  );
}

function BlogPostHtml() {
  const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
  console.log(recentPosts);
  return recentPosts.items.slice(0, 5).map((item, index) => (
    <li key={index}>
      <a href={`${item.permalink}`}>{item.title}</a>{" "}
    </li>
  ));
}

function HomepageTopicTitle(text) {
  return (text);
}

export default function Home() {
  return (
    <Layout
      //title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <h3>にじてくとって何？</h3>
        こんなことをしています。。
        <HomepageFeatures />
        <ul>
          <BlogPostHtml />
        </ul>
      </main>
    </Layout>
  );
}
