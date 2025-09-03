import Home from "./screens/Home/home";
/* import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas from "./screens/Peliculas/Peliculas";
import UnaPelicula from "./screens/UnaPelicula/UnaPelicula";
import Resultados from "./screens/Resultados/Resultados";
import Series from "./screens/Series/Series";
import UnaSerie from "./screens/UnaSerie/UnaSerie"; */
/* import Error from "./screens/Error/Error"; */
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
{/*       <Route exact path="/favoritos" component={Favoritos} />
      <Route exact path="/peliculas" component={Peliculas} />
      <Route exact path="/pelicula/:id" component={UnaPelicula} />
      <Route exact path="/resultados" component={Resultados} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/serie/:id" component={UnaSerie} />
      <Route component={Error} /> */}
    </Switch>
  );
}

export default App;