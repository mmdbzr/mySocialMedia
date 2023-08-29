import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/sidebar/SideBar";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";

function App() {
	const location = useLocation();
	const isLoginPage = location.pathname === "/Login";
	return (
		<div>
			{!isLoginPage && (
				<div className="sticky top-0 z-20">
					<Header />
				</div>
			)}
			<div className="flex">
				{!isLoginPage && (
					<div className="w-56">
						<SideBar />
					</div>
				)}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Profile" element={<Profile />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
