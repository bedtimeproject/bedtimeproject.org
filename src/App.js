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
// Wiki
const Wiki = lazy(() => import("./Pages/Read/Stories/Wiki/Wiki"));
const Places = lazy(() => import("./Pages/Read/Stories/Wiki/Places/Places"));
const IsleOfAlto = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfAlto/IsleOfAlto")
);
const IsleOfCirro = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfCirro/IsleOfCirro")
);
const IsleOfCo = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfCo/IsleOfCo")
);
const IsleOfGreete = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfGreete/IsleOfGreete")
);
const IsleOfNimbo = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfNimbo/IsleOfNimbo")
);

const IsleOfStrato = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IsleOfStrato/IsleOfStrato")
);
const IslesOfArcane = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/IslesOfArcane/IslesOfArcane")
);
const Minterra = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/Minterra/Minterra")
);
const PortOfSky = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/PortOfSky/PortOfSky")
);
const SarrenIsles = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/SarrenIsles/SarrenIsles")
);
const Stratosphairros = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/Stratosphairros/Stratosphairros")
);
const TheDrySea = lazy(() =>
  import("./Pages/Read/Stories/Wiki/Places/TheDrySea/TheDrySea")
);

const Story = lazy(() => import("./Pages/Read/Stories/Story/Story"));
const Tales = lazy(() => import("./Pages/Read/Tales/Tales"));
const Tale = lazy(() => import("./Pages/Read/Tales/Tale/Tale"));
const Quips = lazy(() => import("./Pages/Read/Quips/Quips"));

// Play Pages
const Play = lazy(() => import("./Pages/Play/Play"));
const Playground = lazy(() => import("./Pages/Play/Playground/Playground"));
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
              path="/read/stories/wiki"
              element={
                <Suspense fallback={<Loading />}>
                  <Wiki />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places"
              element={
                <Suspense fallback={<Loading />}>
                  <Places />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-alto"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfAlto />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-cirro"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfCirro />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-co"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfCo />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-greete"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfGreete />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-nimbo"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfNimbo />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isle-of-strato"
              element={
                <Suspense fallback={<Loading />}>
                  <IsleOfStrato />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/isles-of-arcane"
              element={
                <Suspense fallback={<Loading />}>
                  <IslesOfArcane />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/minterra"
              element={
                <Suspense fallback={<Loading />}>
                  <Minterra />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/port-of-sky"
              element={
                <Suspense fallback={<Loading />}>
                  <PortOfSky />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/sarren-isles"
              element={
                <Suspense fallback={<Loading />}>
                  <SarrenIsles />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/stratosphairros"
              element={
                <Suspense fallback={<Loading />}>
                  <Stratosphairros />
                </Suspense>
              }
            />
            <Route
              path="/read/stories/wiki/places/the-dry-sea"
              element={
                <Suspense fallback={<Loading />}>
                  <TheDrySea />
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
