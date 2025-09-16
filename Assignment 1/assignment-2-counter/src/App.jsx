
import Counter from "./components/Counter";
import Heading from "./components/Heading";


export default function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="components-row">
            <Heading/>
            <Counter/>
          </div>
        </div>
      </div>
    </>
  );
}