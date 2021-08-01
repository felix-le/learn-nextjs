// import { useRouter } from 'next/router';
import Link from 'next/link';
export const article = ({ article }) => {
  // const router = userRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Back to home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  // Get all posts

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  // Get all articles
  const articles = await res.json();

  // Get id array
  const ids = articles.map((article) => article.id);

  // get path by matching id with post
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths: paths,
    // if id doesn't exist --> return 404 page
    fallback: false,
  };
};

export default article;
