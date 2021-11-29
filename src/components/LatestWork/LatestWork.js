import React from 'react'

const LatestWork = () => {
    return (
        <div>
            <section class="bg-secondary portfolio-section">
            <div class="container">
                <header class="w-50 m-auto text-center portfolio-header">
                    <h2 class="text-white">Latest Working Projects</h2>
                </header>
                <div class="slider">
                    <div class="portfolios owl-carousel">
                        <div class="slider-card portfolio">
                            <img class="img-fluid" src="images/porofolio-thumb/thumb-1.png" alt=""/>
                            <h3 class="text-white mt-10">Power-x-gym (gym website)</h3>
                            <p class="text-default">Lorem Ipsum is simply dummy text of the  printing and typesetting industry.</p>
                        </div>
                        <div class="slider-card portfolio">
                            <img class="img-fluid" src="images/porofolio-thumb/thumb-2.png" alt=""/>
                            <h3 class="text-white mt-10">Creative Agency</h3>
                            <p class="text-default">Lorem Ipsum is simply dummy text of the  printing and typesetting industry.</p>
                        </div>
                        <div class="slider-card portfolio">
                            <img class="img-fluid" src="images/porofolio-thumb/thumb-3.png" alt=""/>
                            <h3 class="text-white mt-10">Hard Rock Music</h3>
                            <p class="text-default">Lorem Ipsum is simply dummy text of the  printing and typesetting industry.</p>
                        </div>
                        <div class="slider-card portfolio">
                            <img class="img-fluid" src="images/porofolio-thumb/thumb-3.png" alt=""/>
                            <h3 class="text-white mt-10">Hard Rock Music</h3>
                            <p class="text-default">Lorem Ipsum is simply dummy text of the  printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default LatestWork
