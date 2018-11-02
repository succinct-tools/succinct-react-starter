import React from "react";
import { create } from "react-test-renderer";
import NavBar from "../";

test("snapshot", () => {
  const c = create(<NavBar />);
  expect(c.toJSON()).toMatchSnapshot();
});
