import { useEffect, useState } from "react";

import { DashboardProvider, useDashboard } from "./context/DashboardContext";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Overview from "./components/overview/Overview";

function AppContent() {
  const [active, setActive] = useState("Overview");
  const [systemInfo, setSystemInfo] = useState(null);
  const { theme } = useDashboard();

  useEffect(() => {
    const getSystemInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/system-info");

        if (!response.ok) {
          throw new Error("Failed to fetch system information");
        }

        const data = await response.json();

        setSystemInfo(data);
      } catch (error) {
        console.error("Error fetching system information:", error);

        setSystemInfo(null);
      }
    };

    getSystemInfo();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 17) {
      return "Good afternoon";
    }

    return "Good evening";
  };

  return (
    <div className={`app-shell ${theme}`}>
      <Header />

      <div className="layout">
        <Sidebar active={active} setActive={setActive} />

        <main>
          <div className="heading">
            <div>
              <p className="eyebrow">WORKSPACE / {active.toUpperCase()}</p>

              <h1>
                {active === "Overview"
                  ? `${getGreeting()}, ${systemInfo?.userName?.toUpperCase() ?? "there"}!`
                  : active}
              </h1>

              <p>
                A practical Context API project where unrelated components
                consume shared application state.
              </p>
            </div>

            <div className="date">
              <small>{systemInfo?.day ?? "MONDAY"}</small>
              <strong>{systemInfo?.date ?? "1 JAN"}</strong>
            </div>
          </div>

          {active === "Overview" ? (
            <Overview />
          ) : (
            <div className="placeholder">
              <b>{active[0]}</b>

              <p className="eyebrow">CONTEXT CONSUMER</p>

              <h2>{active} is under progress.</h2>

              <p>
                Turn this view into a real feature while consuming shared state
                through Context.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <DashboardProvider>
      <AppContent />
    </DashboardProvider>
  );
}

export default App;
