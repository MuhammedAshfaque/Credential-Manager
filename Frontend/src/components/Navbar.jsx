import { useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const Navbar = () => {
    const navigate = useNavigate()
    const { token, setToken, backendUrl } = useContext(AppContext)

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser('');
        navigate('/login')
    }
    const [user, setUser] = useState(null);
    const fetchProfile = async () => {
        try {
          if (!token) return;
          const res = await axios.get(
            `${backendUrl}/api/user/get-profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(res.data.userData);
        } catch (error) {
            console.error("Error fetching profile:", error);
            // setToken("");
            // setUser(null);
            // localStorage.removeItem("token")
        }
      };
      useEffect(() => {
        fetchProfile();
      }, [token])

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

                {/* Middle Nav Links */}
                <div className="ml-52 flex gap-6">
                    <button
                        onClick={() => navigate('/about')}
                        className="text-gray-300 hover:text-green-400 transition"
                    >
                        About
                    </button>

                    <button
                        onClick={() => navigate('/features')}
                        className="text-gray-300 hover:text-green-400 transition"
                    >
                        Features
                    </button>
                </div>

                {/* Right Section (Auth) */}
                {token ? (
                    <div className="flex justify-startitems-center gap-4">
                        <span className="text-gray-300 text-sm">
                            Hi, <span className="text-amber-600 font-medium">{user?.name}</span> 👋
                            <span className="hidden md:inline"> Welcome back</span>
                        </span>

                        <button
                            onClick={logout}
                            className="px-5 py-2 rounded-md bg-red-500 hover:bg-red-400 transition cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="px-5 py-2 rounded-md bg-green-500 text-black font-medium hover:bg-green-400 transition cursor-pointer"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
