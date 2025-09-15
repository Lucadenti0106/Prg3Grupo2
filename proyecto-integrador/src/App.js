import Home from "./screens/Home/Home";
import UnaPelicula from "./Components/UnaPelicula/UnaPelicula";
import UnaSerie from "./Components/UnaSerie/UnaSerie";
import { Route, Switch } from "react-router-dom";
import Resultados from "./screens/Resultados/resultados.js";


/*
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Error from "./screens/Error/Error"; */

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detallepelicula/:id" component={UnaPelicula} />
      <Route exact path="/detalleserie/:id" component={UnaSerie} />
      <Route exact path="/resultados/:query" component={Resultados} />
{/*   <Route exact path="/favoritas" component={Favoritas} />
      <Route exact path="/peliculas" component={Peliculas} />
      <Route exact path="/series" component={Series} />
      <Route path="" component={Error} /> */}
    </Switch>
  );
}

export default App;