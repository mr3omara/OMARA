import {
  ChevronDown,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  SlidersHorizontal,
  Users,
  Wallet,
} from "lucide-react";

const customers = [
  {
    id: "C-1001",
    name: "محمد أحمد",
    phone: "010 1234 5678",
    lines: 4,
    due: "12,500 ج",
    status: "نشط",
  },
  {
    id: "C-1002",
    name: "أحمد محمود",
    phone: "011 4567 8901",
    lines: 2,
    due: "4,250 ج",
    status: "متأخر",
  },
  {
    id: "C-1003",
    name: "محمود علي",
    phone: "012 9876 5432",
    lines: 7,
    due: "0 ج",
    status: "نشط",
  },
  {
    id: "C-1004",
    name: "يوسف حسن",
    phone: "010 7788 2211",
    lines: 3,
    due: "8,750 ج",
    status: "متأخر",
  },
  {
    id: "C-1005",
    name: "شركة النور",
    phone: "011 2255 6633",
    lines: 18,
    due: "31,400 ج",
    status: "نشط",
  },
  {
    id: "C-1006",
    name: "عمر خالد",
    phone: "012 3344 5566",
    lines: 1,
    due: "1,250 ج",
    status: "نشط",
  },
];

function Customers() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-[1600px] p-5 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 text-xs font-medium text-white/30">
              OMARA LINES / CUSTOMERS
            </div>

            <h1 className="text-3xl font-black tracking-tight">
              العملاء
            </h1>

            <p className="mt-2 text-sm text-white/35">
              إدارة العملاء وحساباتهم وخطوطهم ومستحقاتهم من مكان واحد.
            </p>
          </div>

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 text-sm font-bold transition hover:bg-red-500">
            <Plus size={18} />
            إضافة عميل
          </button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            icon={Users}
            label="إجمالي العملاء"
            value="1,248"
            detail="12 عميل جديد هذا الشهر"
          />

          <SummaryCard
            icon={Phone}
            label="إجمالي الخطوط"
            value="8,920"
            detail="متوسط 7.1 خط للعميل"
          />

          <SummaryCard
            icon={Wallet}
            label="إجمالي المستحقات"
            value="486,750 ج"
            detail="على 143 عميل"
            danger
          />

          <SummaryCard
            icon={Users}
            label="عملاء متأخرون"
            value="143"
            detail="يحتاجون متابعة"
            danger
          />
        </div>

        {/* Main panel */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B]">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-md">
              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                placeholder="ابحث بالاسم أو رقم الخط..."
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.035] pr-11 pl-4 text-sm outline-none placeholder:text-white/20 transition focus:border-red-500/40"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
                <SlidersHorizontal size={16} />
                الفلاتر
              </button>

              <button className="flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
                الحالة
                <ChevronDown size={15} />
              </button>

              <button className="flex h-10 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
                ترتيب حسب
                <ChevronDown size={15} />
              </button>
            </div>
          </div>

          {/* Results info */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <span className="text-xs text-white/35">
              عرض 6 من أصل 1,248 عميل
            </span>

            <span className="text-xs text-white/25">
              آخر تحديث: الآن
            </span>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-white/[0.06] text-xs text-white/30">
                  <th className="px-6 py-4 font-medium">العميل</th>
                  <th className="px-6 py-4 font-medium">رقم العميل</th>
                  <th className="px-6 py-4 font-medium">الخط الرئيسي</th>
                  <th className="px-6 py-4 font-medium">الخطوط</th>
                  <th className="px-6 py-4 font-medium">المستحق</th>
                  <th className="px-6 py-4 font-medium">الحالة</th>
                  <th className="px-6 py-4 font-medium"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/[0.05]">
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="group transition hover:bg-white/[0.025]"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-sm font-bold">
                          {customer.name.charAt(0)}
                        </div>

                        <div>
                          <div className="font-semibold">
                            {customer.name}
                          </div>

                          <div className="mt-1 text-xs text-white/30">
                            عميل منذ 2024
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-white/45">
                      {customer.id}
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm font-medium">
                        {customer.phone}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-lg bg-white/[0.05] px-2.5 py-1 text-xs">
                        {customer.lines} خطوط
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={
                          customer.due === "0 ج"
                            ? "text-sm text-white/35"
                            : "text-sm font-bold text-red-400"
                        }
                      >
                        {customer.due}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <Status status={customer.status} />
                    </td>

                    <td className="px-6 py-4">
                      <button className="rounded-lg p-2 text-white/25 opacity-0 transition hover:bg-white/5 hover:text-white group-hover:opacity-100">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-white/[0.06] lg:hidden">
            {customers.map((customer) => (
              <div key={customer.id} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] font-bold">
                      {customer.name.charAt(0)}
                    </div>

                    <div>
                      <div className="font-semibold">{customer.name}</div>
                      <div className="mt-1 text-xs text-white/30">
                        {customer.phone}
                      </div>
                    </div>
                  </div>

                  <Status status={customer.status} />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <MobileValue
                    label="الخطوط"
                    value={`${customer.lines}`}
                  />

                  <MobileValue
                    label="المستحق"
                    value={customer.due}
                  />

                  <MobileValue
                    label="العميل"
                    value={customer.id}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
            <span className="text-xs text-white/30">
              الصفحة 1 من 125
            </span>

            <div className="flex gap-2">
              <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/35">
                السابق
              </button>

              <button className="rounded-lg border border-red-600/30 bg-red-600/10 px-3 py-2 text-xs text-red-400">
                1
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50">
                2
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50">
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  detail,
  danger = false,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  detail: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        danger
          ? "border-red-500/15 bg-red-500/[0.035]"
          : "border-white/10 bg-[#0B0B0B]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/40">{label}</span>

        <div
          className={`rounded-xl p-2.5 ${
            danger
              ? "bg-red-500/10 text-red-400"
              : "bg-white/[0.05] text-white/45"
          }`}
        >
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-5 text-2xl font-black tracking-tight">
        {value}
      </div>

      <div className="mt-2 text-xs text-white/25">{detail}</div>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const delayed = status === "متأخر";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${
        delayed
          ? "bg-red-500/10 text-red-400"
          : "bg-emerald-500/10 text-emerald-400"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          delayed ? "bg-red-400" : "bg-emerald-400"
        }`}
      />

      {status}
    </span>
  );
}

function MobileValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.035] p-3">
      <div className="text-[10px] text-white/25">{label}</div>
      <div className="mt-2 truncate text-xs font-semibold">{value}</div>
    </div>
  );
}

export default Customers;