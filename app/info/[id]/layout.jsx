import Header from "./Header";
import { META } from "@consumet/extensions"

const anilist = new META.Anilist();


export default async function DashboardLayout({ children, params:{id} }) {

  const info = await anilist.fetchAnimeInfo(id).then(data =>(data))

  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div className="children ">
        <Header info={info}/>
        {children}
      </div>
    </section>
  );
}