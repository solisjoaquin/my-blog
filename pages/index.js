import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <p className={utilStyles.paragraphHome}>
          Hi, I am a web developer with a focus on frontend development. Skills
          include work team player with agile methodologies and creative problem
          solver. Able to create well designed websites.
        </p>

        <h2 className={utilStyles.headingLg}>Podcast</h2>
        <iframe
          //style="border-radius:12px"
          src="https://open.spotify.com/embed/episode/3ROJy7Sh4QhxOYhy5nr2nC?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <h2 className={utilStyles.headingLg}>Notes</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, label }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className={utilStyles.postTitleLink} href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
                <label className={utilStyles.label}>{label}</label>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
