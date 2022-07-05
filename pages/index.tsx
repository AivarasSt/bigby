import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BigbyVPN</title>
        <meta name="description" content="Virtual private network - VPN service" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  )
}

export default Home
