import Homescreen from "./screens/Homescreen";

function App() {
  const changemode = () => {
    const circle = document.querySelector(".circle");
    circle.classList.toggle("circleActive");
    const App = document.querySelector(".App");
    App.classList.toggle("darkMode");
  };
  return (
    <>
      <div className='App'>
        <Homescreen changemode={changemode} />
      </div>
    </>
  );
}

export default App;
