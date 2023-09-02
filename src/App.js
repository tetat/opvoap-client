import { Route, Routes } from "react-router-dom";
import AdminRequireAuth from "./AdminAuth/AdminRequireAuth/AdminRequireAuth";
import "./App.css";
import Products from "./pages/Fruits/Products";
import ProductsDetail from "./pages/Fruits/ProductsDetail/ProductsDetail";
import ProductsForUpdate from "./pages/Fruits/UpdateProduct/ProductsForUpdate";
import UpdateProduct from "./pages/Fruits/UpdateProduct/UpdateProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login/Login";
import NotRequireAuth from "./pages/Login/NotRequireAuth/NotRequireAuth";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import AddProducts from "./pages/Private/AddProducts/AddProducts";
import MyProducts from "./pages/Private/MyProducts/MyProducts";
import Layout from "./pages/Shared/Layout";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/products"
            element={<Products></Products>}
          ></Route>
          <Route
            path="/updateproducts"
            element={
              <RequireAuth>
                <AdminRequireAuth>
                  <ProductsForUpdate></ProductsForUpdate>
                </AdminRequireAuth>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/products/:productId"
            element={
              <RequireAuth>
                <ProductsDetail></ProductsDetail>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addproducts"
            element={
              <RequireAuth>
                <AdminRequireAuth>
                  <AddProducts></AddProducts>
                </AdminRequireAuth>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myproducts"
            element={
              <RequireAuth>
                <AdminRequireAuth>
                  <MyProducts></MyProducts>
                </AdminRequireAuth>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/updateprices/:id"
            element={
              <RequireAuth>
                <AdminRequireAuth>
                  <UpdateProduct></UpdateProduct>
                </AdminRequireAuth>
              </RequireAuth>
            }
          ></Route>

          <Route path="/register" element={
            <NotRequireAuth>
              <Register></Register>
            </NotRequireAuth>
          }></Route>
          <Route path="/login" element={
            <NotRequireAuth>
              <Login></Login>
            </NotRequireAuth>
          }></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
