import React from "react";
import { create } from "react-test-renderer";
import Demo from "..";

test("snapshot", () => {
  const c = create(<Demo />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("set sample state", () => {
  const c = create(<Demo />);
  const instance = c.getInstance();

  expect(instance.state.sample).toBe(false);
  instance.handleClickTrue();
  expect(instance.state.sample).toBe(true);
  instance.handleClickFalse();
  expect(instance.state.sample).toBe(false);
});
