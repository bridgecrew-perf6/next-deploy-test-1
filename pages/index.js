import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="ulbi tv, nextjs"></meta>
        <title>Главная страница</title>
      </Head>
      <div>
        <div>
          <Link href="/">
            <a>Head</a>
          </Link>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </div>
        <h1>Head page</h1>
      </div>
    </>
  );
};

export default Index;
