import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import SingleFont from './single-font/SingleFont'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/font/:name' element={<SingleFont/>}/>
    </Routes>
  )
}

export default RouteController