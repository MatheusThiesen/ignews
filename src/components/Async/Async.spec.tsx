import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Async } from ".";

test("it renders correctly", async () => {
  render(<Async />);

  expect(screen.getByText("Hello World!")).toBeInTheDocument();
  // expect(
  //   await screen.findByText("Button", {}, { timeout: 1500 })
  // ).toBeInTheDocument();

  await waitFor(() => expect(screen.getByText("Button")).toBeInTheDocument());
  // _____________________________________________________________

  await waitFor(() =>
    expect(screen.queryByText("Invisible")).not.toBeInTheDocument()
  );

  // await waitForElementToBeRemoved(screen.queryByText("Invisible"));
});

// - GET: Procurar de forma assíncrona, se não encontrar ocorre erro
// - QUERY: Procurar de forma assíncrona, se não encontrar NÃO ocorre erro
// - FIND: Aguarda elemento aparecer, se não encontrar ocorre erro
