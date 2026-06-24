import { useEffect, useState } from "react";

// routeur par hash (#/tarifs) — robuste sur GitHub Pages (page de projet, sous-chemin)
// et sans config serveur. API inchangée : navigate("/tarifs"), usePath() -> "/tarifs".
function current() {
  const h = window.location.hash.replace(/^#/, "");
  return h || "/";
}

export function navigate(path: string) {
  if (current() === path) return;
  window.location.hash = path;
  window.scrollTo(0, 0);
}

export function usePath() {
  const [path, setPath] = useState(current());
  useEffect(() => {
    const onChange = () => setPath(current());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}
