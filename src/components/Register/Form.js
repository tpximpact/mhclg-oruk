"use client"

import { useActionState } from "react";
import { signUp } from "@/actions/register";

export const  Form = () => {
	const DEFAULT_STATE = {
		username:"",
		password:"",
		errors: null
	}
	const [state, action, isPending] = useActionState(signUp, DEFAULT_STATE);

	if (isPending) {
		return <div>wait</div>
	}
  return (
 <form action={action}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue={state.username}
          required
        />
        {state.errors?.username && (
          <p className="text-sm text-red-500">{state.errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue={state.password}
        />
        {state.errors?.password && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  )
  

}