import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const navigate = useNavigate()
    const { token, setToken } = useContext(AppContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        navigate('/login')
    }

    return (
        <nav className="w-full bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <div
                    className="text-xl font-semibold cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <span className="text-green-400">&lt;</span>
                    Pass<span className="text-green-400">OP/&gt;</span>
                </div>

                {/* Right Section */}
                {!token ? (
                    <button
                        onClick={() => navigate('/login')}
                        className="px-5 py-2 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition cursor-pointer"
                    >
                        Login
                    </button>
                ) : (
                    <button
                        onClick={logout}
                        className="px-5 py-2 rounded-md bg-red-500 hover:bg-red-400 transition cursor-pointer"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
