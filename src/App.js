import styles from "./App.module.css";

//PAGE IMPORTS
import Search from "./components/cocktail search/search";
import Glass from "./components/cocktail glass/Glass";
import Ingredients from "./components/cocktail ingredients/ingredients";
import Method from "./components/Cocktail method/method";

function App() {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <Search />
        <Glass />
        <Ingredients />
        <Method />
      </div>
    </div>
  );
}

export default App;
