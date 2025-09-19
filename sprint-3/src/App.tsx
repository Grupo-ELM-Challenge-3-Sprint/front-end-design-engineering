import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import "./globals.css"
import GuiaInterativoWrapper from "./components/GuiaInterativo/GuiaInterativoWrapper";

export default function App() {

  return (
    <div>
      <Cabecalho/>
        <Outlet/>
        <GuiaInterativoWrapper />
      <Rodape/>
    </div>
  );
}
