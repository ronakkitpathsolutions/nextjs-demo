import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className="xs:px-2 sm:px-2 md:px-5 px-8">
      <Head>
        <title>ROnak Portfolio</title>
        <meta name="description" content="I'm a MERN stack developer." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/5e8f2bd7d6.js" crossOrigin="anonymous"></script>
      </Head>
      <Header/>
      <Banner/>
      <Skills/>
      <Footer/>
    </div>
  )
}
