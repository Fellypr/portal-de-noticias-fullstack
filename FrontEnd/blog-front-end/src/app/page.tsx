import NavBar from "./components/navbar/Navbar";
import "./globals.css";
import "./home.css";
import MainNew from "./components/MainNews/MainNews";

export default function Home() {
  return (
    <div className="main">
      <NavBar />
      <div className="main-news-container">
        <MainNew />
      </div>
    </div>
  );
}
