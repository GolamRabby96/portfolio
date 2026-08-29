import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import FloatingWhatsApp from "./component/FloatingWhatsApp/FloatingWhatsApp";
import BackgroundEffect from "./component/BackgroundEffect/BackgroundEffect";

function App() {
	return (
		<div className="App">
			<BackgroundEffect />
			<Home></Home>
			<FloatingWhatsApp />
		</div>
	);
}

export default App;
