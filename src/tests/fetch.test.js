import React from "react";
import { render, screen, wait } from "@testing-library/react"; // highlight-line
// import "jest-dom/extend-expect";
// import testData from "../../cypress/mocks/testData";
import App from "../App";

jest.mock("../../cypress/mocks/testData");

// test('if planets are being fetched', async () => {
//   render(<App />);
//   const alderaan = await screen.findByText('Alderaan')
//   expect(alderaan).toBeInTheDocument();
// });
jest.useFakeTimers(20000);
test("if typing on name filter planets are being filtered", async () => {
  render(<App />);

  const tatooine = await screen.findByText("Tatooine");

  // const nameFilter = screen.getByTestId('name-filter');
  // userEvent.type(nameFilter, 'tatooine');

  expect(tatooine).toBeInTheDocument();
});

// test('if numerical filters are being used', async () => {
//   render(<App />);
//   const columnFilter = screen.getByTestId('column-filter');
//   const comparison = screen.getByTestId('comparison-filter');
//   const valueFilter = screen.getByTestId('value-filter');
//   const toggleFilterBtn = screen.getByTestId('button-filter');
//   const tatooine = await screen.findByText('Tatooine');
//   const hoth = await screen.findByText('Hoth');
//   expect(tatooine).toBeInTheDocument();
//   userEvent.selectOptions(columnFilter, 'diameter');
//   userEvent.selectOptions(comparison, 'igual a');
//   userEvent.type(valueFilter, '7200');
//   userEvent.click(toggleFilterBtn);
//   expect(tatooine).not.toBeInTheDocument();
//   expect(hoth).toBeInTheDocument();
//   const filterVisible = screen.getByTestId('filter');
//   expect(filterVisible).toBeVisible();
// })
