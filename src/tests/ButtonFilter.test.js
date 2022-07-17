import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();
test("Verifica se o botão de filtrar está sendo renderiado", async () => {
  render(<App />);
  await waitFor(
    () => {
      const elementbuttonFilter = screen.getByTestId("button-filter");
      expect(elementbuttonFilter).toBeInTheDocument();
    },
    { timeout: 20000 }
  );
});

