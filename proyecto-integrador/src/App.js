import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import DetallePelicula from "./screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./screens/DetalleSerie/DetalleSerie";  
import Resultados from "./screens/Resultados/Resultados";
import NotFound from "./screens/NotFound/NotFound";
import Series from "./screens/Series/Series";
import EnCarteleraScreen from "./screens/EnCarteleraFull/EnCarteleraFull.js";
import TopRatedScreen from "./screens/TopRatedFull/TopRatedFull.js";
import Favoritas from "./screens/Favoritas/Favoritas.js";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detallepelicula/:id" component={DetallePelicula} />
      <Route exact path="/detalleserie/:id" component={DetalleSerie} />
      <Route exact path="/resultados/:tipo/:query" component={Resultados} /> 
      <Route path="/series" component={Series} />
      <Route path="/encartelera" component={EnCarteleraScreen} />
      <Route path="/toprated" component={TopRatedScreen} />
      <Route exact path="/favoritas" component={Favoritas} />
      <Route path="" component={NotFound} /> 
    </Switch>
  );
}

export default App;