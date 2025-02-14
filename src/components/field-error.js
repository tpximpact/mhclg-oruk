const FieldError = ({ formState, name }) => {
  return (
    <span className="text-xs text-red-400">
      {formState.fieldErrors[name]?.[0]}
    </span>
  );
};

export { FieldError };
