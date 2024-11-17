import './App.css'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux"
import appstore from './assets/Store'

function App() {
  return(
    <Provider store={appstore}>

      <Header/>

      <Outlet/>

    </Provider>
  )

}

export default App
