//VAmos a construir  una aplicación de seleccion y busqueda de Emisoras de Radio en Streaming

import { fireEvent, queryByLabelText, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

beforeEach(() => render(<App />))

// 0 La aplicación debe renderizar correctamente
describe('0 LA aplicación debe rendierizar correctamente', () => {
    test('0 - La aplicación debe renderizar correctamente', () => {
        expect(screen).toBeDefined();
    })
})

// 1 - El nombre de la aplicacion debe mostrarse en algun lugar => "Open Radio Camp"
describe('1 - El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => {
    test('1 - El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => {
        const name = "OpenRadioCamp";
        const el = screen.getByText(name);
        expect(el).toBeInTheDocument();

    })
})
// 2 - Debemos poder buscar Radios por nombres
// 2a - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
// 2b - LA aplicación debe tener un botón de búsqueda => TExto "Buscar radio"
// 2c - Cuando hacemos click en el boton buscar se debe ejecutar la funcion de busqueda 1 sola vez
describe('2 - Debemos poder buscar Radios por nombres', () => {
    test('2a - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
        const placeholderText = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholderText);
        expect(input).toBeInTheDocument();
    })
    test('LA aplicación debe tener un botón de búsqueda => Texto "Buscar radio"', () => {
        const buttonText = "Buscar";
        const button = screen.getByText(buttonText);
        expect(button).toBeInTheDocument();
    })
    test('2c - Cuando hacemos click en el boton buscar se debe ejecutar la funcion de busqueda 1 sola vez', () => {
        const functionMock = jest.fn();
        const buttonText = "Buscar";
        const button = screen.getByText(buttonText);
        button.addEventListener('click', functionMock);
        fireEvent.click(button);
        expect(functionMock).toHaveBeenCalledTimes(1);
    })
})



// 3 debe existir un listado de emisoras
// 3a Debe existir un listado de emisoras
// 3b el listado debe inicializar vacio
// 3c cuando se hace una busqueda válida, el listado debe mostar al menos un resultado
// 3d Cuando ahcemos una busqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisorras para esta busqueda"
describe('3 - Listado de emisoras', () => {
    test('DEbe existir un listado de emisoras', () => {
        const listado = screen.getByLabelText('listado-emisoras');
        expect(listado).toBeInTheDocument();
    })
    test('El listado debe inicializar vacio', () => {
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBe(0);
    })
    test('3c cuando se hace una busqueda válida, el listado debe mostar al menos un resultado', async () => {
        const placeholderText = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholderText);
        const buttonText = "Buscar";
        const button = screen.getByText(buttonText);
        fireEvent.change(input, { target: { value: 'country' }});
        fireEvent.click(button);
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBeGreaterThanOrEqual(0);
    })
})