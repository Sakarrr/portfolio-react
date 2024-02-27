import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <html>
        <head></head>
        <body>
          <NavBar />
          <div className="wrapper body">
            <div className="content">
              <h1 class="glitch" data-text=" I'm Sakar Shrestha">
                I'm Sakar Shrestha
              </h1>
              <p>WordPress Developer, Javascript Developer.</p>
              <div>
                <Link to="/about-me">
                  See More About Me!
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="8"
                      fill="none"
                      viewBox="0 0 24 8"
                    >
                      <path
                        fill="#545454"
                        d="M23.354 4.354a.5.5 0 000-.708L20.172.464a.5.5 0 10-.707.708L22.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h23v-1H0v1z"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <div>
                  <a href="https://github.com/sakarrr"></a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default Home;
