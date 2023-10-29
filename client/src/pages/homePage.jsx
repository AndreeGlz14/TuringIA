import TuringImg from '../assets/Turing-ia.jpeg'
export default function HomePage() {

    return (
      <>
      <div className='flex h-[calc(90vh-100px)] items-center justify-center'>
      <div className='bg-emerald-800 max-w-md p-10 rounded-md'>
        <h1 className='font-bold text-2xl text-lime-300'>Aplicacion de prueba para la empresa Turing-IA</h1>
        <a href="http://www.linkedin.com/company/turing-inteligencia-artificial/?originalSubdomain=mx"target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center" >
            <img className="w-100 h-100 " src={TuringImg} alt="Mi perfil de linkedin"  />
          </div>
        </a>
      </div>
    </div>
      </>
    )
  }