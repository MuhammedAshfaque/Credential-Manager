import { useEffect, useRef, useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from '../context/AppContext'

const Manager = () => {
  const { token, backendUrl } = useContext(AppContext)

  const [passwordArray, setPasswordArray] = useState([])
  const [form, setForm] = useState({ site: '', username: '', password: '' })

  const passwordRef = useRef()
  const eyeRef = useRef()

  useEffect(() => {
    if (!token) return;

    fetch(`${backendUrl}/api/credentials`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setPasswordArray(data));
  }, [token]);

  const savePassword = async () => {
    if (!token) {
      toast.error("Login first");
      return;
    }

    const res = await fetch(`${backendUrl}/api/credentials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setPasswordArray([...passwordArray, data]);
    setForm({ site: "", username: "", password: "" });

    toast.success("Password saved");
  };


  const editPassword = (id) => {
    const item = passwordArray.find(p => p.id === id)
    setForm(item)
    deletePassword(id, false)
  }

  const deletePassword = (id, confirmBox = true) => {
    if (!confirmBox || confirm('Delete this password?')) {
      const updated = passwordArray.filter(p => p.id !== id)
      setPasswordArray(updated)
      localStorage.setItem('passwords', JSON.stringify(updated))
      toast.success('Password deleted')
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    toast.info('Copied to clipboard')
  }

  const togglePassword = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
      eyeRef.current.src = 'icons/hidden.png'
    } else {
      passwordRef.current.type = 'password'
      eyeRef.current.src = 'icons/eye.png'
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />

      <div className="min-h-[85vh] flex justify-center px-4 py-8">
        <div className="w-full max-w-5xl  backdrop-blur-xl rounded-2xl shadow-xl p-6">

          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center">
            <span>&lt;</span>
            Pass
            <span className="text-primary">OP/&gt;</span>
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Your secure password manager
          </p>

          {/* Form */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-6 space-y-5">

            <input
              name="site"
              value={form.site}
              onChange={handleChange}
              placeholder="Website URL"
              className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="rounded-lg border px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] outline-none"
              />

              <div className="relative">
                <input
                  ref={passwordRef}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border px-4 py-2 pr-10 focus:ring-2 focus:ring-[var(--primary)] outline-none"
                />
                <img
                  ref={eyeRef}
                  src="icons/eye.png"
                  onClick={togglePassword}
                  className="absolute right-3 top-2.5 w-5 cursor-pointer opacity-70 hover:opacity-100"
                />
              </div>
            </div>

            <button
              onClick={savePassword}
              className="mx-auto flex items-center gap-2 px-8 py-2 rounded-lg bg-primary text-white font-semibold hover:scale-[1.03] transition cursor-pointer"
            >
              💾 Save Password
            </button>
          </div>

          {/* Password Table */}
          {token && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Saved Passwords</h2>

              {passwordArray.length === 0 && (
                <p className="text-gray-500">No passwords saved yet.</p>
              )}

              {passwordArray.length > 0 && (
                <div className="overflow-x-auto rounded-xl shadow-md">
                  <table className="w-full text-sm">
                    <thead className="bg-[var(--primary)] text-white">
                      <tr>
                        <th className="py-3">Site</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {passwordArray.map(item => (
                        <tr key={item.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 text-center">
                            <a href={item.site} target="_blank" className="underline">
                              {item.site}
                            </a>
                          </td>
                          <td className="text-center">
                            {item.username}
                            <span onClick={() => copyText(item.username)} className="ml-2 cursor-pointer">📋</span>
                          </td>
                          <td className="text-center">
                            ••••••••
                            <span onClick={() => copyText(item.password)} className="ml-2 cursor-pointer">📋</span>
                          </td>
                          <td className="text-center space-x-3">
                            <button onClick={() => editPassword(item.id)}>✏️</button>
                            <button onClick={() => deletePassword(item.id)}>🗑️</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Manager
