import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import FloatingWhatsApp from "./component/FloatingWhatsApp/FloatingWhatsApp";
import BackgroundEffect from "./component/BackgroundEffect/BackgroundEffect";
import ThemeToggle from "./component/ThemeToggle/ThemeToggle";

function App() {
	return (
		<div className="App">
			<BackgroundEffect />
			<Home></Home>
			<FloatingWhatsApp />
			<ThemeToggle />
		</div>
	);
}

export default App;
