import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component'

const App = () => {
  return (
    <Routes>
      {/* nested routes, the Navigation should always nest everything below it no matter what the routes goes  */}
      <Route path="/" element={<Navigation />} >
      {/* WE WANT TO MAKE THE BASE COMPONENT RENDERED WHEN ONE NAVIGATES TO / ... ADD INDEX */}
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;