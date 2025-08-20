import { z } from 'zod';

// Contact form schema with enhanced constraints
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be under 50 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message is too long' })
});

// Infer the TypeScript type from schema
export type ContactFormData = z.infer<typeof contactSchema>;

// Validation helper function
export const validateContactForm = (
  data: unknown // accepts raw input
): { success: true; data: ContactFormData } | { success: false; errors: Record<string, string> } => {
  const result = contactSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  result.error.errors.forEach((err) => {
    const field = String(err.path[0]);
    if (!errors[field]) {
      errors[field] = err.message;
    }
  });

  return { success: false, errors };
};
