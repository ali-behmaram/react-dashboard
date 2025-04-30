import Home from './pages/home/Home'
import NewUser from './pages/NewUser/NewUser'
import ProductList from './pages/Products/Products'
import UserList from './pages/Users/UserList'
import Product from './pages/Product/Product'


let routes = [
    {path:'/', element:<Home/>},
    {path:'/users', element:<UserList/>},
    {path:'/newUser', element:<NewUser/>},
    {path:'/products', element:<ProductList/>},
    {path:'/product/:productID', element:<Product/>}
]


export default routes