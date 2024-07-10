import { getCarouselImages } from '@/services/carouselService'
import { register } from 'swiper/element/bundle'
import { useEffect, useState } from "react"

const apiRute = import.meta.env.PUBLIC_API_POLICLINICO

register()

const SimpleSlider = () => {
	const [imgs, setImgs] = useState([])

    const getAllImagenes = async () => {
        const { imagenes } = await getCarouselImages()
        setImgs(imagenes)
    }

    useEffect(() => {
        getAllImagenes()
    }, [])

	return(
		<swiper-container
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
					<swiper-slide key={img.id} class="text-center flex justify-center items-center w-fit relative">
						<img src={`${apiRute}/storage/${img.imagen}`} alt={img.alt} className="h-[27rem]"/>
					</swiper-slide>
				))
			}
		</swiper-container>
	)
}

export default SimpleSlider