import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
// import 'react-alice-carousel/lib/alice-carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollTop from "./hooks/useScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollTop> */}
        <Provider store={store}>
          <MainPage/>
          <ToastContainer autoClose={2000}/>
        </Provider>
      {/* </ScrollTop> */}
    </BrowserRouter>
  );
}

export default App;
