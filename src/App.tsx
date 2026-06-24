import { usePath } from "./router";
import Home from "./home/Home";
import Tarifs from "./home/Tarifs";
import Contact from "./home/Contact";

export default function App() {
  const path = usePath();
  if (path === "/tarifs") return <Tarifs />;
  if (path === "/contact") return <Contact />;
  return <Home />;
}
