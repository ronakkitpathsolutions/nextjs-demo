import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Banner = ({ ...props }) => {
    return (
        <section {...props} className={`text-gray-600 body-font ${styles.main_banner}`}>
            <div className="container h-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl xl:text-5xl mb-3 font-medium text-gray-900">Hello, I am</h1>
                    <h1 className="title-font sm:text-5xl text-2xl xl:text-7xl mb-3 font-bold text-gray-900">ROnak Kapadi</h1>
                    <p className="mb-8 title-font sm:text-2xl text-2xl font-medium text-gray-900 leading-relaxed">I'm a MERN Stack Developer.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <Link href='https://nova-e-com.s3.amazonaws.com/Resume/Ronak+Kapadi+-CV+(IPS).pdf' target="_blank" >Download CV</Link>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                <img className={`object-cover object-center rounded ${styles.banner}`} alt="hero" src="./banner.svg"></img>
                </div>
            </div>
        </section>
    )
}

export default Banner