// @ts-check
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Styles
import "./App.scss";

// Utils
import { useInitialData } from "./utils/useInitialData/useInitialData";

// Components
import Home from "./Pages/Home/Home";
import Loading from "./Pages/LoadingPage/LoadingPage";

// Read Pages
const Read = lazy(() => import("./Pages/Read/Read"));
const BedtimeStories = lazy(() =>
  import("./Pages/Read/BedtimeStories/BedtimeStories")
);
const MrsBlueSky = lazy(() =>
  import("./Pages/Read/BedtimeStories/MrsBlueSky/MrsBlueSky")
);
const TheGuideToSunset = lazy(() =>
  import("./Pages/Read/BedtimeStories/TheGuideToSunset/TheGuideToSunset")
);
const SurfersHideaway = lazy(() =>
  import("./Pages/Read/BedtimeStories/SurfersHideaway/SurfersHideaway")
);
const Stories = lazy(() => import("./Pages/Read/Stories/Stories"));
const Story = lazy(() => import("./Pages/Read/Stories/Story/Story"));
const Tales = lazy(() => import("./Pages/Read/Tales/Tales"));
const Tale = lazy(() => import("./Pages/Read/Tales/Tale/Tale"));
const Quips = lazy(() => import("./Pages/Read/Quips/Quips"));

// Play Pages
const Play = lazy(() => import("./Pages/Play/Play"));
const Playground = lazy(() => import("./Pages/Play/Playground/Playground"));
const Chess = lazy(() => import("./Pages/Play/Chess/Chess"));
const LightsOut = lazy(() => import("./Pages/Play/LightsOut/LightsOut"));
const Sudoku = lazy(() => import("./Pages/Play/Sudoku/Sudoku"));

// About Pages
const About = lazy(() => import("./Pages/About/About"));
const Licenses = lazy(() => import("./Pages/About/Licenses/Licenses"));
const Acknowledgements = lazy(() =>
  import("./Pages/About/Acknowledgements/Acknowledgements")
);

// Parents Pages
const Parents = lazy(() => import("./Pages/Parents/Parents"));

// Misc Pages
const FourOhFour = lazy(() => import("./Pages/404/404"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy/PrivacyPolicy"));

/**
 * @function App
 * @description The root of this React application. This component mostly
 * handles the navigation of the application.
 * @author Alexander Burdiss
 * @since 5/12/21
 * @version 2.0.0
 * @component
 * @example
 * <App />
 */
export default function App() {
  useInitialData();

  return (
    <div className="AppWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/play"
            element={
              <Suspense fallback={<Loading />}>
                <Play />
              </Suspense>
            }
          />
          <Route
            path="/play/playground"
            element={
              <Suspense fallback={<Loading />}>
                <Playground />
              </Suspense>
            }
          />
          <Route
            path="/play/chess"
            element={
              <Suspense fallback={<Loading />}>
                <Chess />
              </Suspense>
            }
          />
          <Route
            path="/play/lights-out"
            element={
              <Suspense fallback={<Loading />}>
                <LightsOut />
              </Suspense>
            }
          />
          <Route
            path="/play/sudoku"
            element={
              <Suspense fallback={<Loading />}>
                <Sudoku />
              </Suspense>
            }
          />
          <Route
            path="/play/*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
          <Route
            path="/read"
            element={
              <Suspense fallback={<Loading />}>
                <Read />
              </Suspense>
            }
          />
          <Route path="/read/stories" element={<Outlet />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Stories />
                </Suspense>
              }
            />
            <Route
              path=":story"
              element={
                <Suspense fallback={<Loading />}>
                  <Story />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/read/bedtime-stories/mrs-blue-sky"
            element={
              <Suspense fallback={<Loading />}>
                <MrsBlueSky />
              </Suspense>
            }
          />
          <Route
            path="/read/bedtime-stories/surfers-hideaway"
            element={
              <Suspense fallback={<Loading />}>
                <SurfersHideaway />
              </Suspense>
            }
          />
          <Route
            path="/read/bedtime-stories/the-guide-to-sunset"
            element={
              <Suspense fallback={<Loading />}>
                <TheGuideToSunset />
              </Suspense>
            }
          />
          <Route
            path="/read/bedtime-stories"
            element={
              <Suspense fallback={<Loading />}>
                <BedtimeStories />
              </Suspense>
            }
          />
          <Route
            path="/read/bedtime-stories/*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
          <Route
            path="/read/quips"
            element={
              <Suspense fallback={<Loading />}>
                <Quips />
              </Suspense>
            }
          />
          <Route path="/read/tales" element={<Outlet />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Tales />
                </Suspense>
              }
            />
            <Route
              path={":tale"}
              element={
                <Suspense fallback={<Loading />}>
                  <Tale />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/read/*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/about/acknowledgements"
            element={
              <Suspense fallback={<Loading />}>
                <Acknowledgements />
              </Suspense>
            }
          />
          <Route
            path="/about/licenses"
            element={
              <Suspense fallback={<Loading />}>
                <Licenses />
              </Suspense>
            }
          />
          <Route
            path="/about/*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
          <Route
            path="/parents"
            element={
              <Suspense fallback={<Loading />}>
                <Parents />
              </Suspense>
            }
          />
          <Route
            path="/parents/*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Suspense fallback={<Loading />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <FourOhFour />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
