import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

export function Navbar () {
    const {isAuthenticated, logout, user} = useAuth();
    return(
        <nav className="bg-slate-800  flex justify-between py-5 px-5 ">
            <Link to='/exercises'>
            <h5 className='text-2xl font-bold text-lime-300'>TuringIA</h5>
            </Link>
            <ul className="flex gap-x-2">
                {
                    isAuthenticated ? (
                        <>
                        <li>
                        <h5 className='text-2xl font-bold text-lime-300'>Welcome {user.username}</h5> 
                        </li>
                        <li>
                            <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>
                                <Link to='/add-exercises'>Add Exercises</Link>
                            </button>
                        </li>
                        <li>
                            <button className='bg-red-500 text-white rounded-lg px-4 py-2'> 
                            <Link to='/' onClick={() => {
                                logout()
                                }}>Logout</Link>
                            </button>
                        </li>
                        </>
                    ):(
                        <>
                        <li>
                        <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>
                                <Link to='/login'>Login</Link>
                            </button>
                        </li>
                        <li>
                        <button className='bg-emerald-400 text-white rounded-lg px-4 py-2'>
                                <Link to='/register'>Register</Link>
                            </button>
                        </li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
    
}
export default Navbar;