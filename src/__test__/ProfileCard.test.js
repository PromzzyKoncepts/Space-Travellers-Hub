import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../Redux/ConfigureStore";
import ProfileCard from "../components/ProfileCard";

it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ProfileCard />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
