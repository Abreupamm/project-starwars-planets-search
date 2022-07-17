import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import fetchPlanetsMock from "./mock/mockPlanets";

jest.useFakeTimers();

describe("testa a tabela", () => {
  beforeEach(() => {
    jest
      .spyOn(global, "fetch")
      .mockResolvedValue({ json: async () => fetchPlanetsMock });
    render(<App />);
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  test("Verifica se os planetas são renderizados", async () => {
    await waitFor(() => {
      const { results } = fetchPlanetsMock;
      const planetsName = results.map(({ name }) => name);

      planetsName.forEach(
        (name) => {
          const planet = screen.getByText(name);
          expect(planet).toBeInTheDocument();
        },
        { timeout: 20000 }
      );
    });
  });

  test("Verifica filtro por nome", () => {
    const elementNameFilter = screen.getByTestId("name-filter");
    userEvent.type(elementNameFilter, "Tatooine");
    expect(elementNameFilter).toHaveValue("Tatooine");
  });

  test("Verifica filtro numérico", () => {
    const elementComparison = screen.getByTestId("comparison-filter");
    const elementValue = screen.getByTestId("value-filter");
    const elementButton = screen.getByTestId("button-filter");
    
    userEvent.selectOptions(elementComparison, ["igual a"]);
    userEvent.type(elementValue, "200000");
    userEvent.click(elementButton);
    
    const planetTatooine = screen.getByRole("cell", { name: "Tatooine" });
    
    expect(screen.getAllByRole("row")).toHaveLength(2);
    expect(planetTatooine).toBeInTheDocument();
    const elementFilter = screen.getByTestId("filter")
    expect(elementFilter).toBeInTheDocument();
  });
  test('Verifica se a tabela possui a coluna Diameter', ()=>{
    const elementPlanet= screen.getAllByText(/Diameter/i);
    expect(elementPlanet).toHaveLength(2);
    
  });

  test('Verifica botão de remover todos os filtros', ()=>{
    const elementButtonRemove = screen.getByTestId("button-remove-filters");
    userEvent.click(elementButtonRemove);
    const elementPlanetsList = screen.getAllByRole('cell');
    expect(elementPlanetsList).toHaveLength(130);
  });
});
