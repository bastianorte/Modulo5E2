import { useState } from "react";
import WithMoreInfo from "./WithMoreInfo";

interface Data {
    id: number;
    imagen: string;
    genero: string;
    name: string;
    especialidad: string;
    experiencia: number;
    email: string;
    phone: number;    
}

interface DoctorCard {
  data: Data[];
}

const DoctorCard: React.FC<DoctorCard> = ({data}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedDoctor(null);
  };  

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center pb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Equipos Médico</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">         
        {data.map((doctor) => (
        <div key={doctor.id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
            <div className="flex flex-col items-center pb-4 pt-6">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={doctor.imagen}  alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-primary">{doctor.genero === "m" ? 'Dr' : 'Dra'} {doctor.name}</h5>
                <span className="text-sm text-primary">{doctor.especialidad}</span>
                <span className="text-sm text-primary">{doctor.experiencia} años de experiencia</span>
                <div className="flex mt-4 md:mt-6">
                <button 
              className="px-4 py-2 bg-primary text-white text-md rounded hover:bg-third"
              onClick={() => openModal(doctor)}
            >
              Más Información
            </button>


                </div>                
                <div className="flex mt-4 md:mt-6">
                <WithMoreInfo isOpen={isOpen} onClose={closeModal} doctor={selectedDoctor} />
                </div>             
            </div>
        </div>
        ))}

        </div>
      </div>
    )
}


export default DoctorCard