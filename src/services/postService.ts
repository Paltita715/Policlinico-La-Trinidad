export const getPublicaciones = async () => {
    const res = await fetch('https://api-policlinico-production.up.railway.app/api/publicaciones',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

export const getPublicacionById = async (id: string) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/publicaciones/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data.publicacion
}

export const addPublicacion = async (formData: FormData) => {
    const res = await fetch("https://api-policlinico-production.up.railway.app/api/publicaciones", {
        method: "POST",
        body: formData,
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data)
    return data
}

export const deletePublicacion = async (id:number) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/publicacionesdelete/${id}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`)
    }

    const data = await res.json();
    return data
}

export const updatePublicacion = async(formData:FormData, id:number) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/publicacionesupdate/${id}`,{
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return data
}

export const getCarouselImages = async () => {
    const res = await fetch('https://api-policlinico-production.up.railway.app/api/carruselimagenes',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

export const getCarouselImageById = async (id: string) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/carruselimagenes/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data.publicacion
}

export const addCarouselImage = async (formData: FormData) => {
    const res = await fetch("https://api-policlinico-production.up.railway.app/api/carruselimagenes", {
        method: "POST",
        body: formData,
    })

    const data = await res.json()
    return data
}

export const deleteCarouselImage = async (id:number) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/carruselimagenesdelete/${id}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`)
    }

    const data = await res.json();
    return data
}

export const updateCarouselImage = async(formData:FormData, id:number) => {
    const res = await fetch(`https://api-policlinico-production.up.railway.app/api/carruselimagenesupdate/${id}`,{
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return data
}