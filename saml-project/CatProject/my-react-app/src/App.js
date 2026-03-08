import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CatGallery from "./pages/CatGallery";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(null); // null = 未判定

	useEffect(() => {
		axios.get("http://localhost:8080/auth/me", { withCredentials: true })
			.then(() => setIsLoggedIn(true))
			.catch(() => setIsLoggedIn(false));
	}, []);

	if (isLoggedIn === null) {
		return <p>ログイン状態を確認中にゃ…</p>;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/"
					element={isLoggedIn ? <CatGallery /> : <Navigate to="/login" />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;