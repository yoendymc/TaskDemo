import Head from "next/head";

import TaskLayout from './components/TaskLayout';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={'container'}>
        <TaskLayout />
      </div>
    </main>
    
    <style jsx>
      {`
        .container {
          display: flex;
          justify-content: space-around;
        }
      `}
    </style>
  </div>
);

export default Home;
