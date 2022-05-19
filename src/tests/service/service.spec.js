import React from "react";
import "@testing-library/jest-dom";
import server from "./methods";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "../../components/List";
import { act } from "@testing-library/react";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
);

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("test api calls", () => {
  it("should add a new user to the list", async () => {
    // teste 'e2e'
    const { findByText } = render(<List />);

    const addButton = await findByText("adicionar request");

    act(() => {
      userEvent.click(addButton);
    });

    await waitFor(async () => {
      expect(await findByText("Test User")).toBeInTheDocument();
    });
  });
});
