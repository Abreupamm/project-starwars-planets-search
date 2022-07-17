import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { wait } from "@testing-library/user-event/dist/utils";

  test("Verifixa se o filtro todos os filtros estão sendo renderizados", async () => {
    render(<App />);
    await wait(
      () => {
        const elementNameInput = screen.getByTestId("name-filter");
        const elementColumnFilters = screen.getByTestId("column-filter");
        const elementComparisonFilters =
          screen.getByTestId("comparison-filter");
        const elementValueFilter = screen.getByTestId("value-filter");

        expect(elementValueFilter).toBeInTheDocument();
        expect(elementComparisonFilters).toBeInTheDocument();
        expect(elementNameInput).toBeInTheDocument();
        expect(elementColumnFilters).toBeInTheDocument();
      },
      { timeout: 20000 }
    );
  });


  test("Verifica se o botão de remover todos os filtros está sendo renderizado", async () => {
    render(<App />);
    await wait(
      () => {
        const elementremoveFilter = screen.getByTestId("button-remove-filters");
        expect(elementremoveFilter).toBeInTheDocument();
      },
      { timeout: 20000 }
      );
    });

