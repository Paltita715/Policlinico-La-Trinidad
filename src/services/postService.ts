const apiRute = import.meta.env.PUBLIC_API_POLICLINICO

export const getPublicaciones = async () => {
    const res = await fetch(`${apiRute}/api/publicaciones`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

export const getPublicacionById = async (id: string) => {
    const res = await fetch(`${apiRute}/api/publicaciones/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data.publicacion
}

export const addPublicacion = async (formData: FormData) => {
    const res = await fetch(`${apiRute}/api/publicaciones`, {
        method: "POST",
        credentials: 'include',
        body: formData,
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json()
    return data
}

export const deletePublicacion = async (id:number) => {
    const res = await fetch(`${apiRute}/api/publicacionesdelete/${id}`, {
        method: "DELETE",
        credentials: 'include',
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`)
    }

    const data = await res.json();
    return data
}

export const updatePublicacion = async(formData:FormData, id:number) => {
    const res = await fetch(`${apiRute}/api/publicacionesupdate/${id}`,{
        method: "POST",
        credentials: 'include',
        body: formData
    })
    const data = await res.json()
    return data
}

export const getCarouselImages = async () => {
    const res = await fetch(`${apiRute}/api/carruselimagenes`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data
}

export const getCarouselImageById = async (id: string) => {
    const res = await fetch(`${apiRute}/api/carruselimagenes/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    return data.publicacion
}

export const addCarouselImage = async (formData: FormData) => {
    const res = await fetch(`${apiRute}/api/carruselimagenes`, {
        method: "POST",
        credentials: 'include',
        body: formData,
    })

    const data = await res.json()
    return data
}

export const deleteCarouselImage = async (id:number) => {
    const res = await fetch(`${apiRute}/api/carruselimagenesdelete/${id}`, {
        method: "DELETE",
        credentials: 'include',
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`)
    }

    const data = await res.json();
    return data
}

export const updateCarouselImage = async(formData:FormData, id:number) => {
    const res = await fetch(`${apiRute}/api/publicacionesupdate/${id}`,{
        method: "POST",
        credentials: 'include',
        body: formData
    })
    const data = await res.json()
    return data
}