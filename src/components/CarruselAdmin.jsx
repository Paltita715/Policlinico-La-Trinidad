import { getCarouselImages, deleteCarouselImage } from '@/services/carouselService'
import { useEffect, useState, useRef } from "react"
import { register } from 'swiper/element/bundle'
import CarruselForm from "./CarruselForm"

const apiRute = import.meta.env.PUBLIC_API_POLICLINICO

register()

const CarruselAdmin = () => {
    const [imgs, setImgs] = useState([])
    const swiperRef = new useRef(null)

    const getAllImagenes = async () => {
        const { imagenes } = await getCarouselImages()
        setImgs(imagenes)
        if (swiperRef.current) {
            swiperRef.current.swiper.update()
        }
    }

    const handleDelete =  async (id) => {
        if (window.confirm("¿Estas seguro de eliminar esta imagen?")) {
            await deleteCarouselImage(id)
            getAllImagenes()
        }
    }

    useEffect(() => {
        getAllImagenes()
    }, [])

    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-center py-4 gap-3">
            <h2 className="text-center font-black text-2xl uppercase md:mr-4">Administrador de Imagenes del Carrusel</h2>
            <div className="mt-4 md:mt-0 hover:scale-105 lg:hover:scale-110 ease-in-out duration-300">
                <CarruselForm getAllImagenes={getAllImagenes}/>
            </div>
        </div>
        <swiper-container
            ref={swiperRef}
            class="h-[27rem]"
            pagination="true"
            pagination-clickable="true"
            pagination-dynamic-bullets="true"
            slides-per-view="1"
            centered-slides="true"
            space-between="30"
            navigation="true"
            rewind="true"
            autoplay-delay="7000"
            autoplay-disable-on-interaction="false"
            breakpoints='{"640":{"slidesPerView":"auto"}}'
            >
            <swiper-slide class="text-center flex justify-center items-center w-fit">
                <img className='h-[27rem]' src="/img/Inicio/slide1.jpg" alt="slide1" />
            </swiper-slide>
            <swiper-slide class="text-center flex justify-center items-center w-fit">
                <img className='h-[27rem]' src="/img/Inicio/slide2.jpg" alt="slide2" />
            </swiper-slide>
            <swiper-slide class="text-center flex justify-center items-center w-fit">
                <img className='h-[27rem]' src="/img/Inicio/slide3.jpg" alt="slide3" />
            </swiper-slide>
            <swiper-slide class="text-center flex justify-center items-center w-fit">
                <img className='h-[27rem]' src="/img/Inicio/slide4.jpg" alt="slide4" />
            </swiper-slide>
            {
                imgs.map(img => (
                    <swiper-slide class="text-center flex justify-center items-center w-fit relative">
                        <button className='absolute top-0 right-0 bg-red-500 py-2 px-3' onClick={() => handleDelete(img.id)}>Borrar imagen</button>
                        <img src={`${apiRute}/storage/${img.imagen}`} alt={img.alt} className="h-[27rem]"/>
                    </swiper-slide>
                ))
            }
        </swiper-container>
        </>
    )
}

export default CarruselAdmin