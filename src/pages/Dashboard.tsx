import {
  BarChart3,
  Bell,
  CreditCard,
  Package,
  Search,
  ShoppingCart,
  Users,
  WalletCards,
} from "lucide-react";

function Dashboard() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#050505] text-white"
    >
      {/* Sidebar */}
      <aside className="fixed right-0 top-0 hidden h-screen w-64 border-l border-white/10 bg-[#090909] lg:block">
        <div className="flex h-20 items-center border-b border-white/10 px-6">
          <div>
            <div className="text-xl font-black tracking-[0.18em]">
              OMARA
            </div>
            <div className="text-[10px] font-bold tracking-[0.4em] text-red-500">
              LINES
            </div>
          </div>
        </div>

        <nav className="p-4">
          <div className="mb-3 px-3 text-[10px] font-bold tracking-widest text-white/25">
            WORKSPACE
          </div>

          <NavItem icon={BarChart3} label="الرئيسية" active />
          <NavItem icon={Users} label="العملاء" />
          <NavItem icon={CreditCard} label="الخطوط" />
          <NavItem icon={Package} label="المخزون" />
          <NavItem icon={ShoppingCart} label="المبيعات" />
          <NavItem icon={WalletCards} label="التحصيل" />

          <div className="mb-3 mt-8 px-3 text-[10px] font-bold tracking-widest text-white/25">
            MANAGEMENT
          </div>

          <NavItem icon={BarChart3} label="التقارير" />
          <NavItem icon={Package} label="النسخ الاحتياطي" />
        </nav>
      </aside>

      {/* Main */}
      <main className="min-h-screen lg:mr-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-[#050505]/90 px-5 backdrop-blur-xl lg:px-8">
          <div className="relative w-full max-w-xl">
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25"
            />

            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.035] pr-11 pl-4 text-sm outline-none placeholder:text-white/20 focus:border-red-500/40"
              placeholder="ابحث عن عميل، خط، فاتورة..."
            />
          </div>

          <button className="relative mr-4 rounded-xl p-3 text-white/50 hover:bg-white/5 hover:text-white">
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
        </header>

        {/* Content */}
        <section className="mx-auto max-w-[1600px] p-5 lg:p-8">
          <div className="mb-8">
            <p className="mb-2 text-xs text-white/30">
              OMARA LINES / DASHBOARD
            </p>

            <h1 className="text-3xl font-black">
              لوحة التحكم
            </h1>

            <p className="mt-2 text-sm text-white/35">
              مركز التحكم في العملاء والخطوط والمبيعات والتحصيل.
            </p>
          </div>

          {/* KPI */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Stat
              title="العملاء"
              value="1,248"
              note="+8.4% هذا الشهر"
              icon={Users}
            />

            <Stat
              title="الخطوط المتاحة"
              value="3,482"
              note="مخزون حالي"
              icon={CreditCard}
            />

            <Stat
              title="مبيعات الشهر"
              value="286,450 ج"
              note="+14.2% عن الشهر السابق"
              icon={ShoppingCart}
            />

            <Stat
              title="المستحق اليوم"
              value="48,750 ج"
              note="23 عميل"
              icon={WalletCards}
              danger
            />
          </div>

          {/* Content cards */}
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            <Panel title="آخر العمليات">
              <Activity
                title="بيع خط جديد"
                description="010 1234 5678 — محمد أحمد"
                value="+ 12,500 ج"
              />

              <Activity
                title="تسجيل سداد"
                description="أحمد محمود — فاتورة #10482"
                value="+ 2,000 ج"
              />

              <Activity
                title="إضافة خطوط للمخزون"
                description="Vodafone — 120 خط"
                value="120 خط"
              />

              <Activity
                title="إصدار فاتورة"
                description="فاتورة #10481"
                value="8,750 ج"
              />
            </Panel>

            <Panel title="يحتاج انتباهك">
              <Alert
                title="عملاء متأخرون"
                description="23 عميل لديهم مستحقات اليوم"
              />

              <Alert
                title="مخزون منخفض"
                description="6 مجموعات خطوط تحتاج مراجعة"
              />

              <Alert
                title="النسخ الاحتياطي"
                description="آخر نسخة احتياطية منذ 8 ساعات"
              />
            </Panel>
          </div>
        </section>
      </main>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
        active
          ? "bg-red-600 text-white"
          : "text-white/50 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      <Icon size={19} />
      {label}
    </button>
  );
}

function Stat({
  title,
  value,
  note,
  icon: Icon,
  danger = false,
}: {
  title: string;
  value: string;
  note: string;
  icon: React.ComponentType<{ size?: number }>;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        danger
          ? "border-red-500/20 bg-red-500/[0.04]"
          : "border-white/10 bg-[#0B0B0B]"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-white/40">{title}</span>

        <div className="rounded-xl bg-white/5 p-2.5 text-white/50">
          <Icon size={18} />
        </div>
      </div>

      <div className="text-2xl font-black">{value}</div>

      <div className="mt-2 text-xs text-white/25">{note}</div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B0B0B]">
      <div className="border-b border-white/10 px-6 py-5">
        <h2 className="font-bold">{title}</h2>
      </div>

      <div className="divide-y divide-white/[0.06]">
        {children}
      </div>
    </div>
  );
}

function Activity({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-5">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-xs text-white/30">{description}</div>
      </div>

      <div className="text-sm font-bold">{value}</div>
    </div>
  );
}

function Alert({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 px-6 py-5">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />

      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-xs text-white/30">{description}</div>
      </div>
    </div>
  );
}

export default Dashboard;