import React from "react";
import { create } from "react-test-renderer";
import Sample from "../";

test("snapshot", () => {
  const c = create(<Sample />);
  expect(c.toJSON()).toMatchSnapshot();
});
