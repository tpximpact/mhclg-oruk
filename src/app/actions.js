'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import {
  fromErrorToFormState,
  toFormState,
} from '@/utilities/to-form-state';

let messages = [
  {
    id: crypto.randomUUID(),
    text: 'First Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Second Message',
  },
  {
    id: crypto.randomUUID(),
    text: 'Third Message',
  },
];

export const getMessages = async () => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  return Promise.resolve(messages);
};

const createMessageSchema = z.object({
  title: z.string().min(1).max(191),
  text: z.string().min(1).max(191),
});

export const createMessage = async (
  formState,
  formData
) => {
	/*
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const data = createMessageSchema.parse({
      title: formData.get('title'),
      text: formData.get('text'),
    });

    messages.push({
      id: crypto.randomUUID(),
      ...data,
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }
  
  */
  let data
  
  try {
    data = createMessageSchema.parse({
      title: formData.get('title'),
      text: formData.get('text'),
    });
  } catch (error) {
    return fromErrorToFormState(error);
  }
  
  try {
	  const rawResponse = await fetch('https://httpbin.org/post',
	  {
		  method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
	
  });
  const content = await rawResponse.json();
	 
 messages.push({
      id: crypto.randomUUID(),
      title: formData.get('title'),
	  text: JSON.stringify(content)
    });
 
  
  } catch (error) {
    return toFormState('Error', 'Error');
  }
  
  

  revalidatePath('/developers/register');

  return toFormState('SUCCESS', 'Registration requested');
};
