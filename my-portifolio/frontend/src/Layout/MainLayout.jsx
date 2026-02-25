import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-start py-4">
        <div className="container-fluid px-3">
          <Outlet /> {/* aqui o React Router renderiza o conteúdo da rota */}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}