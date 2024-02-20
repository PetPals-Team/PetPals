import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import HeroImage from '../../global/assets/Adopt a pet-bro.svg';
import Logo from '../../global/assets/logo.svg';



export default function Home() {

    const controlsDiscover = useAnimation();
    const [refDiscover, inViewDiscover] = useInView({
        triggerOnce: true,
        threshold: 0.6, // Adjust this value as needed (0.5 means 50% in view)
    });

    const controlsAdd = useAnimation();
    const [refAdd, inViewAdd] = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const controlsBlog = useAnimation();
    const [refBlog, inViewBlog] = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const controlsAbout = useAnimation();
    const [refAbout, inViewAbout] = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    // Repeat this pattern for other sections as needed

    useEffect(() => {
        if (inViewDiscover) {
            controlsDiscover.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
        }
    }, [controlsDiscover, inViewDiscover]);

    useEffect(() => {
        if (inViewAdd) {
            controlsAdd.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
        }
    }, [controlsAdd, inViewAdd]);

    useEffect(() => {
        if (inViewBlog) {
            controlsBlog.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
        }
    }, [controlsBlog, inViewBlog]);

    useEffect(() => {
        if (inViewAbout) {
            controlsAbout.start({ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } });
        }
    }, [controlsAbout, inViewAbout]);

    // Repeat this pattern for other sections as needed

    return (
        <>
            <main className='home-page'>
                <section className='home-hero-section'>
                    <div className='home-hero-div-left'>
                        <h1 className='home-hero-heading'>Don't shop.<br />Adopt a pet!</h1>
                        <div className='home-hero-buttons'>
                            <button>Adopt now</button>
                            <button>Rescue</button>
                        </div>
                    </div>

                    <div className='home-hero-div-right'>
                        <img src={HeroImage} style={{ width: "100%" }}></img>
                    </div>
                </section>
            </main>

            <section ref={refDiscover} className='home-sub-section home-discover-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsDiscover}
                >
                    <h1>Discover Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>

                </motion.div>
            </section>

            <section ref={refAdd} className='home-sub-section home-add-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsAdd}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <h1>Add Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>

                </motion.div>
            </section>

            <section ref={refBlog} className='home-sub-section home-blog-section'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={controlsBlog}
                >

                    <h1>Blog Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>

                </motion.div>
            </section>

            <section ref={refAbout} className='home-sub-section home-about-section'>
                <motion.div initial={{ opacity: 0, x: 50 }}
                    animate={controlsAbout}>

                    <h1>About Section</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, suscipit quasi possimus facere officiis dicta laborum accusantium vero dolorum quaerat magni, mollitia optio aliquid voluptate. Eligendi explicabo animi nemo quia!</p>
                    <button>Learn More</button>

                </motion.div>
            </section>

            <footer className='home-footer'>

                <div className="home-footer-container">

                    <div className="home-footer-info">

                        <h3>
                            <img src={Logo} style={{ width: '2.3rem', paddingRight: '1rem' }} />
                            PetPals
                        </h3>
                        <div className="home-info-text">
                            <p>A brief description of your company or website goes here. This can be a slightly longer text describing your vision, mission, or values.</p>
                        </div>
                    </div>

                    <div className="home-footer-links">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="home-footer-support">
                        <h3>Support Us</h3>
                        <Link>Donate</Link>
                        <Link>Contribute on GitHub</Link>
                    </div>
                </div>

                <div className="home-footer-copyright">
                    <p>&copy; {new Date().getFullYear()} PetPals Team. All Rights Reserved.</p>
                </div>
            </footer >
        </>
    )
}