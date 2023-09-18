import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import MyAccount from "./components/pages/MyAccount";

function App() {
  return (
    <div>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/my-account" Component={<MyAccount/>} ></Route>
        </Routes>  
      </BrowserRouter> */}
    </div>
  );
}

export default App;
