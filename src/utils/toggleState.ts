// Handles toggle state persistence and management
export const STORAGE_KEY = 'hasSeenToggle';

export const hasUserSeenToggle = (): boolean => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }
  return false;
};

export const markToggleAsSeen = (): void => {
  localStorage.setItem(STORAGE_KEY, 'true');
};

export const getInitialToggleState = (): { isExpanded: boolean; isVisible: boolean } => {
  const hasSeenBefore = hasUserSeenToggle();
  return {
    isExpanded: !hasSeenBefore,
    isVisible: !hasSeenBefore
  };
};