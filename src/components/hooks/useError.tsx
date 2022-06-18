import { useState } from 'react';
interface IError {
  field: string | boolean;
  message: string;
}
export function useErros() {
  const [errors, setErrors] = useState<IError[]>([]);

  function setError({ field, message }: IError) {
    const errrorExists = errors.find(
      (error: IError) => error.field.toString() === error.toString(),
    );

    if (errrorExists) {
      return;
    }

    setErrors((prevState: IError[]) => [...prevState, { field, message }]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName),
    );
  }

  function getErrorMessage(fieldName: string) {
    return errors.find(
      (error) => error.field.toString() === fieldName.toString(),
    )?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessage,
    errors,
  };
}
