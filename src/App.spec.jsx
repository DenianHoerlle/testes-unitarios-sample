import {
  render,
  waitForElementToBeRemoved,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./components/List";

describe("App Component", () => {
  it("should render list items", () => {
    const { rerender } = render(<List initialItems={["Um", "Dois", "Tres"]} />);

    expect(screen.getByText("Um")).toBeInTheDocument();
    expect(screen.getByText("Dois")).toBeInTheDocument();
    expect(screen.getByText("Tres")).toBeInTheDocument();

    // Não monta um novo componente, apenas muda as props!
    rerender(<List initialItems={["Quatro"]} />);

    expect(screen.queryByText("Um")).not.toBeInTheDocument();
    expect(screen.getByText("Quatro")).toBeInTheDocument();
  });

  it("should render list items", () => {
    const { getByText } = render(
      <List initialItems={["Um", "Dois", "Tres"]} />
    );

    expect(getByText("Um")).toBeInTheDocument();
    expect(getByText("Dois")).toBeInTheDocument();
    expect(getByText("Tres")).toBeInTheDocument();
  });

  it("should be able to input a new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputItem = getByPlaceholderText("Novo item");
    const addButton = getByText("adicionar input");

    await userEvent.type(inputItem, "Item inputado");
    await userEvent.click(addButton);

    expect(getByText("Item inputado")).toBeInTheDocument();
  });

  it("should be able to remove an item of the list", async () => {
    const { getByText, getAllByText } = render(
      <List initialItems={["Um", "Dois", "Tres"]} />
    );

    const removeButtons = getAllByText("remover");

    await userEvent.click(removeButtons[1]);

    await waitForElementToBeRemoved(() => getByText("Dois"));
  });
});
