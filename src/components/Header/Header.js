import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="header bg-primary">
                <div className="container">
                    <section className="navbar d-flex justify-between align-center">
                        <div className="logo-section">
                            <h1 className="logo mb-0"><a href="/">ahsan</a></h1>
                        </div>
                        <nav className="menu-section">
                            <ul className="menu d-flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Let's Talk</a></li>
                            </ul>
                        </nav>
                    </section>
                    <section className="banner d-flex align-center">
                        <div className="slogan w-50">
                            <h4 className="text-secondary">Hi There</h4>
                            <h1 className="text-white">I'm <span className="text-primary">Ahsan Habib</span></h1>
                            <h2 className="text-white">I am a Web Developer</h2>
                            <div className="button">
                                <a target="_blank" href="https://drive.google.com/file/d/1Aut3_fbVNzaYTnJiOCr9BA_Hzpro7UR8/view?usp=sharing">
                                    <button className="btn">Download Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className="banner-img w-50">
                            <img className="img-fluid" src="images/hero-bg.svg" alt="" />
                        </div>
                    </section>
                </div>
            </header>
        </div>
    )
}

export default Header
