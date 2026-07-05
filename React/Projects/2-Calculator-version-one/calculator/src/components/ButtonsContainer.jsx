import css from "./ButtonsConntainer.module.css";

function ButtonsContainer() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "x",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((anything) => (
        <button key={anything} className={css.button}>
          {anything}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
