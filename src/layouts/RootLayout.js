import { NavLink, Outlet } from "react-router-dom";

//these are the buttons that bring you to other pages and they are always on the page
export default function Rootlayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          {/* This is the home button */}
          <div className="homebox">
            <NavLink to="/">
              <div class="container1">
                <a class="button">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Home
                </a>
              </div>
            </NavLink>
          </div>
          {/* This is a box with 2 buttons that bring you to the other pages */}
          <div className="flexbox" id="forceBox">
            <div class="container">
              <div class="center">
                <NavLink to="lightside">
                  <button class="btn" id="btnLight">
                    <svg
                      width="180px"
                      height="60px"
                      viewBox="0 0 180 60"
                      class="border"
                    >
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        class="bg-line"
                      />
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        class="hl-line"
                      />
                    </svg>
                    <span id="span">The light side</span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div class="container">
              <div class="center">
                <NavLink to="darkside" id="navDark">
                  <button class="btn" id="btnDark">
                    <svg
                      width="180px"
                      height="60px"
                      viewBox="0 0 180 60"
                      class="border"
                    >
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        class="bg-line"
                      />
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        class="hl-line"
                      />
                    </svg>
                    <span id="span">The dark side</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
