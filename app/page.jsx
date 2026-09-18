import App from "../src/App.jsx";
import AstroPic from "../src/components/AstroPic/AstroPic.jsx";

// Server Component: AstroPic is instantiated here (a Server Component
// ancestor) and passed down to the Client Component `App` as a prop —
// it can't be imported directly inside App.jsx, since that would pull a
// server-only async component into a client bundle.
export default function Page() {
  return <App astroPic={<AstroPic />} />;
}
