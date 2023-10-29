import linkedinImage from '../assets/linkedin.png'
export default function Footer () {
    return(
        <footer className="bg-slate-800  flex justify-between py-5 px-5 absolute bottom-0 w-full ">
            <div>
                <h5 className='font-bold text-2xl text-lime-300'> © Ing.Jesus Andree Gonzalez Avalos</h5>
            </div>
            <div className="bg-lime-300 w-16 h-16 rounded-full flex items-center justify-center">
                <a href="http://www.linkedin.com/in/jesus-andree-gonzalez-avalos-8ab864235"target="_blank" rel="noopener noreferrer">
                    <img className="w-10 h-10 rounded-full" src={linkedinImage} alt="Mi perfil de linkedin"  />
                </a>
            </div>
        </footer>

    )
    
}
