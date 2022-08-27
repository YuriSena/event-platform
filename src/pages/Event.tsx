import { useParams } from "react-router-dom";
import { EventPlaceholder } from "../components/EventPlaceholder";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug + " slug");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? <Video /> : <EventPlaceholder />}
        <Sidebar />
      </main>
    </div>
  );
}
