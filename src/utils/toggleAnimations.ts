import { animate } from 'motion';

export const showMessage = (messageEl: HTMLElement) => {
  return animate(
    messageEl,
    { 
      opacity: [0, 1],
      scale: [0.9, 1]
    },
    { 
      duration: 0.5,
      easing: [0.17, 0.55, 0.55, 1]
    }
  );
};

export const hideMessage = (messageEl: HTMLElement) => {
  return animate(
    messageEl,
    { 
      opacity: [1, 0],
      scale: [1, 0.9]
    },
    { 
      duration: 0.5,
      easing: [0.17, 0.55, 0.55, 1]
    }
  );
};

export const moveToggleToCorner = (toggleEl: HTMLElement) => {
  const finalPosition = { 
    top: '5rem',
    right: '1rem',
    transform: 'scale(0.6)'
  };

  return animate(
    toggleEl,
    {
      top: [toggleEl.style.top, finalPosition.top],
      right: [toggleEl.style.right, finalPosition.right],
      transform: ['scale(1)', finalPosition.transform]
    },
    {
      duration: 0.8,
      easing: [0.17, 0.55, 0.55, 1]
    }
  );
};