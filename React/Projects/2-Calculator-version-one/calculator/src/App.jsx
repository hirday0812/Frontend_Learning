import css from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  /*  The original code without components

  return (
    <div className={css.calculator}>
      <input type="text" className={css.display} />
      <div className={css.ButtonsContainer}>
        <button className = "button">C</button>
      </div>
    </div>
  );
*/

  return (
    <div className={css.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
