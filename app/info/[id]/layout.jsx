import Header from "./Header";

export default function DashboardLayout({ children }) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div className="children ">
        <Header/>
        {children}
      </div>
    </section>
  );
}