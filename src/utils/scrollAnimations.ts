import { animate, inView, scroll, stagger } from "motion";

// Parallax effect for images
export const setupParallaxImages = () => {
  const images = document.querySelectorAll('.parallax-image');
  images.forEach(image => {
    scroll(animate(image, {
      translateY: ['0', '-20px'],
      scale: [1, 1.1],
    }, {
      easing: 'ease-out',
    }));
  });
};

// Fade-in effect for content
export const setupFadeInAnimations = () => {
  inView('.fade-in', ({ target }) => {
    animate(
      target,
      { 
        opacity: [0, 1],
        transform: ['translateY(20px)', 'translateY(0)']
      },
      { 
        duration: 0.8,
        easing: [0.17, 0.55, 0.55, 1] 
      }
    );
  });
};

// 3D rotation effect for cards
export const setup3DCardEffects = () => {
  const cards = document.querySelectorAll('.card-3d');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      animate(
        card,
        { 
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
        },
        { duration: 0.2 }
      );
    });
    
    card.addEventListener('mouseleave', () => {
      animate(
        card,
        { 
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        },
        { duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  });
};

// Staggered animation for lists
export const setupStaggeredAnimations = () => {
  inView('.stagger-list', ({ target }) => {
    animate(
      target.children,
      { 
        opacity: [0, 1],
        transform: ['translateY(20px)', 'translateY(0)']
      },
      { 
        delay: stagger(0.1),
        duration: 0.5,
        easing: [0.17, 0.55, 0.55, 1]
      }
    );
  });
};

// Progress bar animation
export const setupScrollProgress = () => {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  scroll(animate(progressBar, {
    scaleX: [0, 1],
  }, {
    timeline: "scroll()",
  }));
};

// Initialize all scroll animations
export const initScrollAnimations = () => {
  setupParallaxImages();
  setupFadeInAnimations();
  setup3DCardEffects();
  setupStaggeredAnimations();
  setupScrollProgress();
};