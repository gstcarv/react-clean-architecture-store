import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserSearch from "../../../pages/UserSearch";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserSearch />} />

                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
}
