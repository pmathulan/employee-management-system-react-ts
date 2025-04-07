import { useEffect } from 'react';
import { UNSAVED_CHANGES_PROMPT } from '../constants/messages'; // Import the constant

/**
 * Custom hook to prompt the user before navigating away if there are unsaved changes.
 *
 * @param {boolean} isDirty - Flag indicating if the form has unsaved changes (e.g., from react-hook-form's formState).
 * @param {string} [message] - Optional custom message for the confirmation dialog.
 * @param {boolean} [enabled=true] - Optional flag to enable/disable the prompt behavior dynamically.
 */
export const useUnsavedChangesPrompt = (
  isDirty: boolean,
  message: string = UNSAVED_CHANGES_PROMPT,
  enabled: boolean = true
): void => {

  // --- Fallback using `beforeunload` for browser-level navigation (closing tab/window, refresh) ---
  // Note: This works independently of React Router but offers less control over in-app navigation.
  // Custom messages in `beforeunload` are often ignored by modern browsers for security reasons,
  // showing a generic browser message instead.
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty && enabled) {
        // Standard way to trigger the browser's confirmation dialog.
        event.preventDefault();
        // Included for older browsers; modern browsers usually ignore this custom message.
        event.returnValue = message;
        return message; // For some older browsers
      }
      // If not dirty or not enabled, do nothing - allow navigation freely.
    };

    // Add the event listener when the component mounts or dependencies change
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function: remove the event listener when the component unmounts or dependencies change
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty, message, enabled]); // Re-run the effect if these dependencies change
};

// export default useUnsavedChangesPrompt; 