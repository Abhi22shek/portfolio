/**
 * Environment variable validation utility
 */

// List of required environment variables
const requiredEnvVars = [
  'VITE_EMAILJS_PUBLIC_KEY',
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
];

/**
 * Validates that all required environment variables are present
 * @returns boolean indicating if all required variables are present
 */
export const validateEnvVars = (): boolean => {
  const missingVars = requiredEnvVars.filter(
    (envVar) => !import.meta.env[envVar]
  );

  if (missingVars.length > 0) {
    console.error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
    return false;
  }

  return true;
};

/**
 * Gets an environment variable with type safety
 * @param key The environment variable key
 * @param defaultValue Optional default value if the variable is not set
 * @returns The environment variable value or default value
 */
export const getEnvVar = <T extends string>(
  key: string,
  defaultValue?: T
): T => {
  const value = import.meta.env[key] as T | undefined;
  
  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Environment variable ${key} is not set and no default value was provided`);
  }
  
  return (value as T) || (defaultValue as T);
}; 