import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Slow life personal coach and embassador.</p>
        <p>
          This is my personal blog. Stay tuned to learn how to enjoy life while
          doing nothing.
        </p>
      </section>
    </Layout>
  );
}
