import Articles from "../components/Article/Articles";
import Footer from "../components/Footer/Footer";
import FrontPage from "../components/Front Page/FrontPage";
import IconWhatsApp from "../components/IconWhatsApp/IconWhatsApp";
const Home = () => {
  return (
    <div className="home">
      <main>
        <FrontPage />
        <Articles />
        <IconWhatsApp />
      </main>

      {
        // FOOTER
      }
      <Footer />
    </div>
  );
};

export default Home;
