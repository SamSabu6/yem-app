import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import MyAccount from "./pages/MyAccount"; // Correct import path

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <TopNav />
          <Featured />
          <Delivery />
          <TopPicks />
          <Meal />
          <Categories />
          <NewsLetter />
          <Footer />

          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/delivery" element={<Delivery />} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
