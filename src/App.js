import logo from "./logo.svg";
import soon from "./images/images/soon.jpg";
import "./App.css";
import { CounterSlider } from "./Components/Counter";

function App() {
  return (
    <div>
      <div>
        <div id="page">
          <div id="fh5co-container" className="js-fullheight">
            <div className="countdown-wrap js-fullheight">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="display-t js-fullheight">
                    <div className="display-tc animate-box">
                      <nav className="fh5co-nav" role="navigation">
                        <div id="fh5co-logo">
                          <img
                            src={process.env.PUBLIC_URL + "images/logo4.svg"}
                            width={250}
                          />
                        </div>
                      </nav>

                      <h1>We Are Coming Soon!</h1>
                      <CounterSlider />

                      <div className="simply-countdown simply-countdown-one" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover js-fullheight"
              style={{
                backgroundImage: `url(${soon})`,
              }}
            ></div>
          </div>
        </div>
        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
