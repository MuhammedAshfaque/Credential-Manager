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
    const [user, setUser] = useState("");
    const fetchProfile = async () => {
        try {
          if (!token) return; 
          const res = await axios.get(backendUrl + '/api/user/get-profile',
            { headers: { token } })
          setUser(res.data.userData);
        } catch (error) {
            console.error("Error fetching profile:", error);
            setToken("");
            setUser(null);
            localStorage.removeItem("token")
        }
      };
      useEffect(() => {
        fetchProfile();
      }, [token])

    return (
        <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-md border-b border-white/10 text-white">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* LEFT: Logo + User */}
    <div className="flex items-center gap-6">

      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        className="text-xl font-bold cursor-pointer tracking-wide"
      >
        <span className="text-green-400">&lt;</span>
        Pass<span className="text-green-400">OP/&gt;</span>
      </div>

      {/* User Name */}
      {token && (
        <span className="hidden sm:inline text-sm text-gray-300">
          Hi, <span className="text-green-400 font-semibold text-lg">{user?.name}</span> 👋
        </span>
      )}
    </div>

    {/* RIGHT: Nav Links + Auth */}
    <div className="flex items-center gap-8">

      {/* Nav Links */}
      <div className="flex gap-6">
        {["How it works"].map((item) => (
          <button
            key={item}
            onClick={() => navigate(`/how-it-works`)}
            className="relative text-gray-300 hover:text-green-400 transition
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                       after:w-0 after:bg-green-400 after:transition-all
                       hover:after:w-full cursor-pointer"
          >
            {item}
          </button>
        ))}
        {["About", "Features"].map((item) => (
          <button
            key={item}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
            className="relative text-gray-300 hover:text-green-400 transition
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                       after:w-0 after:bg-green-400 after:transition-all
                       hover:after:w-full cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Auth Button */}
      {token ? (
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-red-500/90 hover:bg-red-500
                     transition shadow-md hover:shadow-red-500/40 cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 rounded-lg bg-green-500 text-black font-medium
                     hover:bg-green-400 transition shadow-md hover:shadow-green-500/40 cursor-pointer"
        >
          Login
        </button>
      )}
    </div>

  </div>
</nav>

    )
}

export default Navbar
