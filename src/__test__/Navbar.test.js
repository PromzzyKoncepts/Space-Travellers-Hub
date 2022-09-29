import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import store from "../Redux/ConfigureStore";
import Navbar from "../components/Navbar";

it("renders Component correctly", () => {
  const tree = renderer.create(
    <Router store={store}>
      <Navbar />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
