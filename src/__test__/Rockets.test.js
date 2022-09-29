import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../Redux/ConfigureStore";
import Rockets from "../components/Rockets";

it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
