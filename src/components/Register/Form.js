'use client';

import { useActionState } from 'react';
import { createMessage } from '@/app/actions';
import { SubmitButton } from './SubmitButton';
import { EMPTY_FORM_STATE } from '@/utilities/to-form-state';
import { useToastMessage } from '@/hooks/use-toast-message';
import { FieldError } from './FieldError';
import { useFormReset } from '@/hooks/use-form-reset';

export const Form = () => {
  const [formState, action] = useActionState(
    createMessage,
    EMPTY_FORM_STATE
  );

  const noScriptFallback = useToastMessage(formState);
  const formRef = useFormReset(formState);

  return (
    <form
      action={action}
      ref={formRef}
      className="flex flex-col gap-y-2"
    >
      <label htmlFor="title">Title</label>
      <input id="title" name="title" className="border-2" />
      <FieldError formState={formState} name="title" />

      <label htmlFor="text">Text</label>
      <textarea id="text" name="text" className="border-2" />
      <FieldError formState={formState} name="text" />

      <SubmitButton label="Create" loading="Creating ..." />

      {noScriptFallback}
    </form>
  );
};