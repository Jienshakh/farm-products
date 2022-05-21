import { createRoot } from "react-dom/client";

import App from "./components/app/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
);
