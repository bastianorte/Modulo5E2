import { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard'

// Define la interfaz de los datos de los doctores

interface Doctor {
  id: number;
  name: string;
  genero: string;
  imagen: string;
  especialidad: string;
  experiencia: number;
  email: string;
  phone: number;
}



const ApiDoctores = () => {
  const [data, setData] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza esta URL con tu API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }


 
        const genero = ['m','f']
        const especialidades = ['Cardiología', 'Pediatría', 'Neurología', 'Dermatología']

        const jsonData = (await response.json()) as Doctor[];

        const doctores:Doctor[] = jsonData.map((doctor:Doctor) => {
            return {
                id: doctor.id,
                name: doctor.name,
                genero: genero[Math.floor(Math.random()*genero.length)],
                imagen: `assets/pr${Math.floor(Math.random()*11+1)}.jpg`,
                especialidad: especialidades[Math.floor(Math.random()*especialidades.length)],
                experiencia: Math.floor(Math.random()*10+1),
                phone: doctor.phone,
                email: doctor.email                
            }
        })

        setData(doctores);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [setLoading]);




  return (
    <div className='text-center'>
        {loading && <p>Cargando...</p>}
        {error && (
            <div>
            <p>Error: {error}</p>
            </div>
        )}
        {data && (
            <DoctorCard data={data}/>
      )}
      
    </div>
  );
};

export default ApiDoctores;