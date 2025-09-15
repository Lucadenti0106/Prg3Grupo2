import Home from "./screens/Home/Home";
import UnaPelicula from "./Components/UnaPelicula/UnaPelicula";
import Resultados from "./screens/Resultados/Resultados";

/*
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import UnaSerie from "./screens/UnaSerie/UnaSerie";
import Error from "./screens/Error/Error"; */
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detalle/:id" component={UnaPelicula} />
{/*   <Route exact path="/favoritos" component={Favoritos} />
      <Route exact path="/peliculas" component={Peliculas} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/serie/:id" component={UnaSerie} />
      <Route path="" component={Error} /> */}
    </Switch>
  );
}

export default App;