import {  createContext, useState} from "react"
import axios from "axios"
export const AppContext = createContext()

const AppContextProvider = (props) => {
    const backendUrl = "https://credential-manager-backend-0r6c.onrender.com"
    // const backendUrl = "http://localhost:4000"
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const value = {
        backendUrl,
        token, 
        setToken,
    }

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
