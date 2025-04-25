function Gallery() {
    const images = [
        "https://placehold.co/600x400",
        "https://placehold.co/600x400/orange/white",
        "https://placehold.co/600x400/blue/white",
    ]

    return(
        <section>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{width: "150px", height: "150px"}} />
            ))}
        </section>
    )
}

export default Gallery;