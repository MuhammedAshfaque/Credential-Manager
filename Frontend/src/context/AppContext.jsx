import {  createContext, useState  } from "react"

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = "https://credential-manager-backend-0r6c.onrender.com"
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(false)
    const value = {
        backendUrl,
        token, 
        setToken,
        userData, 
        setUserData, 
    }
  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
