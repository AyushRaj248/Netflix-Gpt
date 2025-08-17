import Body from "./pages/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./components/main/Browse";
import Error from "./pages/others/Error";
import Details from "./components/main/detail/Details";
import ListOfShowOfCategory from "./components/main/detail/ListOfShowOfCategory";
import FAQ from "./pages/FAQ/FAQ";
import Welcome from "./pages/others/Welcome";
import WishList from "./pages/WishList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/" element={<Body />}>
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/browse/:type/:movieId" element={<Details />} />
            <Route
              path="/browse/listofCategory/:type/:category"
              element={<ListOfShowOfCategory />}
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
