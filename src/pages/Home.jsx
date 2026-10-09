
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data.js";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const totalProducts = categories.reduce(
    (total, cat) => total + cat.items.length,
    0
  );

  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-[#f8f8fa] text-neutral-900">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        {/* Hero */}
        <section className="relative mb-14 overflow-hidden rounded-[2rem] bg-[#171717] px-7 py-12 text-white shadow-2xl shadow-neutral-900/10 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-medium tracking-wide text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              كل ما تبحث عنه في مكان واحد
            </div>

            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              اكتشف
              <br />
              شيئًا{" "}
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                مختلف.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400 sm:text-lg">
استكشف مجموعاتنا المختارة بعناية واعثر على ما تبحث عنه بالضبط.
            </p>

            <a
              href="#collections"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-1 hover:bg-neutral-200"
            >
              استكشف الأقسام
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M7 17 17 7M7 7h10v10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="relative z-10 mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-6 sm:mt-16 sm:gap-14">
            <div>
              <p className="text-2xl font-semibold">
                {categories.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                قسم
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {totalProducts.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-neutral-400">
                منتجًا لاستكشافها
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">∞</p>
              <p className="mt-1 text-xs text-neutral-400">
                إمكانيات لا محدودة
              </p>
            </div>
          </div>
        </section>

        {/* Collection heading + search */}
        <section id="collections" className="scroll-mt-8">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                كل المنتجات
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                استكشف الأقسام
              </h2>
              <p className="mt-3 text-sm text-neutral-500">
                اعثر على ما تبحث عنه بسهولة، وتصفّح المنتجات حسب القسم.
              </p>
            </div>

            <div className="relative w-full sm:max-w-xs">
              <svg
                className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" strokeLinecap="round" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن المنتجات..."
                aria-label="ابحث عن المنتجات"
                className="w-full rounded-2xl border border-neutral-200 bg-white py-3.5 pr-12 pl-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-12">
            {filteredCategories.map((cat, index) => (
              <section key={cat.id}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-violet-600 shadow-sm ring-1 ring-neutral-200/70">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {cat.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        {cat.items.length}{" "}
                        "منتج"
                      </p>
                    </div>
                  </div>

                  <div className="hidden h-px flex-1 bg-neutral-200 sm:block" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {cat.items.map((product, productIndex) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/[0.06] sm:p-6"
                    >
                      {/* Subtle hover glow */}
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-100/70 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 p-2.5 ring-1 ring-neutral-100 transition duration-300 group-hover:scale-105 group-hover:bg-violet-50 group-hover:ring-violet-100">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={`${product.name} logo`}
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <span className="text-lg font-bold text-violet-600">
                              {product.name.slice(0, 1)}
                            </span>
                          )}
                        </div>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition duration-300 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              d="M7 17 17 7M7 7h10v10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="relative mt-7">
                        <h4 className="text-base font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-violet-700">
                          {product.name}
                        </h4>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-neutral-400">
                            عرض المنتج
                          </span>
                          <span className="text-[11px] font-medium tabular-nums text-neutral-300">
                            {String(productIndex + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            {filteredCategories.length === 0 && (
              <div className="rounded-3xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                  <svg
                    className="h-6 w-6 text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  لم يتم العثور على منتجات
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  جرّب البحث بكلمات مختلفة.
                </p>
                <button
                  onClick={() => setSearch("")}
                  className="mt-5 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  مسح البحث
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-neutral-200 py-7 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <p>اكتشف المزيد، واعثر على ما يناسبك.</p>
          <p>
            {totalProducts} منتجًا · {categories.length} قسمًا
          </p>
        </footer>
      </div>
    </main>
  );
}