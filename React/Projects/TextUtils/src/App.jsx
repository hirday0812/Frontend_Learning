// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />

      <div className="container my-3">
        <TextArea heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
