import "./index.css";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <Page />;
}

function Page() {
  return (
    <>
      <Header />
      <Entry />
      <Footer />
    </>
  );
}

export default App;
