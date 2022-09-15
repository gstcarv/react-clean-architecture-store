import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/checkout" element={<UserSearch />} /> */}

                <Route path="*" element={<Navigate to={"/checkout"} />} />
            </Routes>
        </BrowserRouter>
    );
}
