import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Geovanni",
    email: "geovanni@gmail.com",
  };
  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { name, email, formState, onInputChange, onResetForm } =
      result.current;

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });

    // expect(name).toBe(initialForm.name);
    // expect(email).toBe(initialForm.email);
    // expect(formState).toEqual(initialForm);
    // expect(onInputChange).toEqual(expect.any(Function));
    // expect(onResetForm).toEqual(expect.any(Function));
  });

  //Tarea
  test("debe de cambiar el nombre del Formulario", () => {
    const newValue = "Juan";
    //Montar el Hook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    //onInputChange() // act, event...
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    //expect, result.current.name === Juan
    expect(result.current.name).toBe(newValue);
    //expect, result.current.formState.name === Juan
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de resetear el Formulario", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      result.current.onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState).toBe(initialForm);
  });
});
