/**
 * Accessibility utility functions
 */

/**
 * Generates a unique ID for accessibility attributes
 * @param prefix Optional prefix for the ID
 * @returns A unique ID string
 */
export const generateId = (prefix = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Handles keyboard navigation for interactive elements
 * @param event The keyboard event
 * @param callback The function to call when Enter or Space is pressed
 */
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  callback: () => void
): void => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};

/**
 * Creates an accessible button props object
 * @param onClick The click handler function
 * @param label The accessibility label
 * @param disabled Whether the button is disabled
 * @returns An object with accessibility props
 */
export const createAccessibleButtonProps = (
  onClick: () => void,
  label: string,
  disabled = false
) => {
  const id = generateId('button');
  
  return {
    id,
    role: 'button',
    tabIndex: disabled ? -1 : 0,
    'aria-label': label,
    'aria-disabled': disabled,
    onClick,
    onKeyDown: (event: React.KeyboardEvent) => 
      handleKeyboardNavigation(event, onClick),
  };
};

/**
 * Creates an accessible link props object
 * @param href The link URL
 * @param label The accessibility label
 * @param isExternal Whether the link opens in a new tab
 * @returns An object with accessibility props
 */
export const createAccessibleLinkProps = (
  href: string,
  label: string,
  isExternal = false
) => {
  const id = generateId('link');
  
  return {
    id,
    href,
    'aria-label': label,
    ...(isExternal && {
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `${label} (opens in new tab)`,
    }),
  };
}; 