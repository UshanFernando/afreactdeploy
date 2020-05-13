import React from 'react'


const Banner = (props) => {
    return (
        <section className="blog-banner-area" id="category">
        <div className="container h-100">
            <div className="blog-banner">
                <div className="text-center">
                        <h1>{props.name}</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            {props.description}
                    </nav>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner


