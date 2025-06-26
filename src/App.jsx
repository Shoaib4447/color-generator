import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [color, setColor] = useState(`#${list[0].hex}`);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log("Error:", error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className='color-input'
          />
          <input
            type='text'
            value={color}
            placeholder='#f214de'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button
            type='submit'
            className='btn'
            style={{
              backgroundColor: color,
              color:
                color === "white" || color === "#ffffff" ? "black" : "white",
            }}
          >
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
