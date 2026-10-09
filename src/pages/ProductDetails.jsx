import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BYBIT_CHECKOUT_URL, findProduct, getPlans } from "../data.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = findProduct(id);
  const plans = useMemo(() => getPlans(id), [id]);
  const [selected, setSelected] = useState(0);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="mb-4 text-neutral-500">المنتج غير موجود</p>
        <Link to="/" className="underline">
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  const plan = plans[selected];

  const checkout = () => {
    const url = BYBIT_CHECKOUT_URL.replace("{product}", encodeURIComponent(product.name)).replace(
      "{price}",
      plan.price
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-md">
      <Link to="/" className="text-sm text-neutral-500 hover:text-neutral-900">
        → رجوع
      </Link>

      <p className="mt-6 text-sm text-neutral-500">{product.category}</p>
      <h1 className="mb-6 text-2xl font-bold">{product.name}</h1>

      <div className="space-y-2">
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 transition ${
              selected === p.id
                ? "border-neutral-900 bg-neutral-50"
                : "border-neutral-200 hover:border-neutral-400"
            }`}
          >
            <span className="font-semibold">{p.label}</span>
            <span dir="ltr">{p.price} USDT</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
        <span className="text-neutral-500">الإجمالي</span>
        <span className="text-lg font-bold" dir="ltr">
          {plan.price} USDT
        </span>
      </div>

      <button
        onClick={checkout}
        className="mt-4 w-full rounded-lg bg-neutral-900 py-3 font-bold text-white transition hover:bg-neutral-700"
      >
        الدفع عبر Bybit
      </button>
    </div>
  );
}
