import React from 'react'

const Expert = () => {
    return (
        <div>
            <section id="progress" class="bg-primary expert-section">
                <div class="container">
                    <div class="d-flex justify-between align-center">
                        <header class="w-40">
                            <div class="mb-20"><span class="text-primary">I,M EXPERT ON</span></div>
                            <h3 class="text-white">Let,s Work Together</h3>
                            <p class="text-default">Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                            <div onclick="myFun()" class="mt-20"><button class="btn">Hire Me</button></div>
                        </header>
                        <div class="w-40">
                            <div class="progress-bar mb-20">
                                <p class="title mb-20 text-white">Node JS</p>
                                <div class="progress">
                                    <span class="progress-count"></span>
                                </div>
                            </div>
                            <div class="progress-bar mb-20">
                                <p class="title mb-20 text-white">Python</p>
                                <div class="progress">
                                    <span class="progress-count"></span>
                                </div>
                            </div>
                            <div class="progress-bar mb-20">
                                <p class="title mb-20 text-white">Laravel</p>
                                <div class="progress">
                                    <span class="progress-count"></span>
                                </div>
                            </div>
                            <div class="progress-bar mb-20">
                                <p class="title mb-20 text-white">SEO</p>
                                <div class="progress">
                                    <span class="progress-count"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Expert
