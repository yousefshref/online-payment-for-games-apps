import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-4">
          <Link to="/" className="text-lg font-bold">
            المتجر الرقمي
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="*"
            element={<p className="py-20 text-center text-neutral-500">الصفحة غير موجودة</p>}
          />
        </Routes>
      </main>
    </div>
  );
}
