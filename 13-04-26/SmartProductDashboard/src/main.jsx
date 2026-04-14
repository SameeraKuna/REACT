import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import {ThemeProvider} from "./context/ThemeProvider.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);

// import ReactDOM from "react-dom/client"
// imports ReactDOM client API and connects react application to actual browser DOM
//  i.e,mount your React app into a real DOM element

// Strict Mode in React:
// 1.Detect unsafe or outdated code
// 2.Helps find side-effect bugs (in strict mode useEffect runs twice only in case of development not in production)
// 3.Warns about deprecated api's
// 4.Checks for unexpected behaviour
