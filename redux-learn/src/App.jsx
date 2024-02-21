import { Provider } from "react-redux";
import store from "./redux/store";
import BookContainer from "./redux/BookContainer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div>
          <BookContainer />
        </div>
      </Provider>
    </>
  );
};

export default App;
