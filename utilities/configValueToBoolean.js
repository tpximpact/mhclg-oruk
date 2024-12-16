export const configValueToBoolean = (value) => {
    if (!value) return false;
    return JSON.parse(value.toLowerCase());
  }