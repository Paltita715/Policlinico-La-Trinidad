export const getCarouselImages = async () => {
    const res = await fetch(`https://api.policlinicolatrinidad.com/api/carruselimagenes`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

export const getCarouselImageById = async (id: string) => {
    const res = await fetch(`https://api.policlinicolatrinidad.com/api/carruselimagenes/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data.publicacion
}

export const addCarouselImage = async (formData: FormData) => {
    const res = await fetch(`https://api.policlinicolatrinidad.com/api/carruselimagenes`, {
        method: "POST",
        body: formData,
    })

    const data = await res.json()
    return data
}

export const deleteCarouselImage = async (id:number) => {
    const res = await fetch(`https://api.policlinicolatrinidad.com/api/carruselimagenesdelete/${id}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`)
    }

    const data = await res.json();
    return data
}

export const updateCarouselImage = async(formData:FormData, id:number) => {
    const res = await fetch(`https://api.policlinicolatrinidad.com/api/carruselimagenesupdate/${id}`,{
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return data
}