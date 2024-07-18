import PublisForm from './PublisForm';
import { getPublicaciones, deletePublicacion } from '@/services/postService'
import { useState, useEffect } from 'react'

const apiRute = import.meta.env.PUBLIC_API_POLICLINICO

const PublicacionesAdmin = () => {
    const [publis, setPublis] = useState([]);
    const [selectedPubli, setSelectedPubli] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // recuperar publicaciones
    const getAllPublicaciones = async () => {
        const { publicaciones } = await getPublicaciones();
        setPublis(publicaciones);
    }

    useEffect(() => {
        getAllPublicaciones()
    }, [])

    //borra una publicacion
    const handleDelete = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar esta publicacion?")) {
            await deletePublicacion(id);
            getAllPublicaciones();
        }
    }

    // obtener publicacion a editar
    const handleEdit = (publi) => {
        setSelectedPubli(publi);
        setIsModalOpen(true);
    }

    const handleModalOpen = () => {
        setSelectedPubli(null);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setSelectedPubli(null);
        setIsModalOpen(false);
    }

    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-center py-4">
            <h2 className="text-center font-black text-2xl uppercase md:mr-4">Administrador de publicaciones</h2>
            <button onClick={handleModalOpen} className="mt-4 md:mt-0 p-3 lg:p-4 rounded-2xl hover:scale-105 lg:hover:scale-110 ease-in-out duration-300 text-[#003449] text-sm lg:text-base bg-[#d5eef1] hover:bg-[#acf1bd] active:bg-[#d5eef1]">
                Crear nueva publicación
            </button>
            {/* Modal para agregar o editar una publicacion */}
            <PublisForm
                getAllPublicaciones={getAllPublicaciones}
                selectedPubli={selectedPubli}
                isModalOpen={isModalOpen}
                handleModalClose={handleModalClose}
            />
        </div>

        <main className="columns-1 md:columns-2 gap-4">
            {
                // recuperar todas las publicaciones de la BD
                publis.map(publi => (
                    <article key={publi.id} className="break-inside-avoid-column bg-[#003449] mb-4 p-4 rounded">
                        <div className='flex flex-col sm:flex-row justify-between items-center mb-2'>
                            <h3 className='text-2xl font-semibold text-white'>{publi.titulo}</h3>
                            <div className='flex gap-2'>
                                <button className='bg-blue-600 p-2 rounded-lg' onClick={() => handleEdit(publi)}>Editar</button>
                                <button className='bg-red-600 p-2 rounded-lg' onClick={() => handleDelete(publi.id)}>Eliminar</button>
                            </div>
                        </div>
                        <p className='mb-2'>{publi.contenido}</p>
                        <img className='max-h-60 mx-auto' src={`${apiRute}/storage/${publi.imagen}`} alt={publi.imagen} />
                    </article>
                ))
            }
        </main>
        </>
    )
}

export default PublicacionesAdmin;
