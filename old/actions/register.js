"use server";

import { z } from "zod";

const SignUpSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});



export async function signUp(
  _prevState,
  form
){
	console.log(_prevState)
	return _prevState
	
	
  const username = form.get("username");
  const password = form.get("password");

  const validatedFields = SignUpSchema.safeParse({
    username,
    password,
  });

  if (!validatedFields.success) {
    return {
      username,
      password,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // process validated form inputs here

  return { username, password };
}