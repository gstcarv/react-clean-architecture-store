import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BaseLayout from '../../../components/BaseLayout';

import StoreProducts from '../../../pages/StoreProducts';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>
                    <Route path='/' element={<StoreProducts />} />

                    <Route path='*' element={<Navigate to={'/'} />} />
                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
}
