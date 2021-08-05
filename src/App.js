import "./App.css";
// import SearchBar from "./components/searchBar/searchBar";
import FavouriteItems from "./components/favouriteItems/favouriteItems";
import DateTime from "./components/dateTimeInfo/dateTimeInfo";
import Footer from "./components//footerItems/footer";

function App() {
  return (
    <div className="background">
      <div className="Container">
        <div className="AppContainer">
          {/* <SearchBar /> */}
          <div className="MainContainer">
            <FavouriteItems />
            <DateTime className="DT"/>
          </div>

          <div className="FooterCont">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
