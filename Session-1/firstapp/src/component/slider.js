function Slider() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://plus.unsplash.com/premium_photo-1701760184387-0519ab2e1aee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwYmx1ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="baner1" height="300" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="baner2" height="300" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQwsTBtGEHUqPW2hTTeX57otZ-2Ics8Vtwg&s" className="d-block w-100" alt="baner3" height="300" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;