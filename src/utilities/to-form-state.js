import { ZodError } from 'zod';


export const EMPTY_FORM_STATE = {
  status: 'UNSET',
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToFormState = (error) => {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR',
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR' ,
      message: 'An unknown error occurred',
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
};

export const toFormState = (
  status,
  message
) => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
};
