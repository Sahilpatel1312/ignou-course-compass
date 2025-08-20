import { useState, useEffect, useRef } from 'react';

interface SmartPopupState {
  shouldShow: boolean;
  isFormSubmitted: boolean;
  lastShownTime: number | null;
}

const STORAGE_KEY = 'ignou_popup_state';
const SHOW_DELAY = 5 * 60 * 1000; // 5 minutes
const TIME_TRIGGER = 25 * 1000; // 25 seconds
const SCROLL_TRIGGER = 0.5; // 50% scroll

export const useSmartPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const exitIntentRef = useRef(false);
  const scrollTriggeredRef = useRef(false);
  const timeTriggeredRef = useRef(false);

  // Get stored state
  const getStoredState = (): SmartPopupState => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {
        shouldShow: true,
        isFormSubmitted: false,
        lastShownTime: null
      };
    } catch {
      return {
        shouldShow: true,
        isFormSubmitted: false,
        lastShownTime: null
      };
    }
  };

  // Save state to storage
  const saveState = (state: Partial<SmartPopupState>) => {
    try {
      const current = getStoredState();
      const updated = { ...current, ...state };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  // Check if popup should be allowed
  const canShowPopup = (): boolean => {
    const state = getStoredState();
    const now = Date.now();
    
    // Don't show if form was submitted
    if (state.isFormSubmitted) return false;
    
    // Don't show if recently shown (within 5 minutes)
    if (state.lastShownTime && (now - state.lastShownTime) < SHOW_DELAY) {
      return false;
    }
    
    return state.shouldShow;
  };

  // Trigger popup if conditions are met
  const triggerPopup = () => {
    if (!hasTriggered && canShowPopup()) {
      setShowPopup(true);
      setHasTriggered(true);
      saveState({ lastShownTime: Date.now() });
    }
  };

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentRef.current) {
        exitIntentRef.current = true;
        triggerPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  // Scroll depth detection
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTriggeredRef.current) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Ensure we have valid scroll dimensions
      if (scrollHeight <= viewportHeight) return;
      
      const scrollPercent = scrollTop / (scrollHeight - viewportHeight);
      
      if (scrollPercent >= SCROLL_TRIGGER) {
        scrollTriggeredRef.current = true;
        triggerPopup();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  // Time delay trigger
  useEffect(() => {
    if (hasTriggered) return;
    
    timeoutRef.current = setTimeout(() => {
      if (!timeTriggeredRef.current && canShowPopup()) {
        timeTriggeredRef.current = true;
        triggerPopup();
      }
    }, TIME_TRIGGER);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Manual popup trigger
  const openPopup = () => {
    setShowPopup(true);
  };

  // Close popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Mark form as submitted
  const markFormSubmitted = () => {
    saveState({ isFormSubmitted: true });
    setShowPopup(false);
  };

  return {
    showPopup,
    openPopup,
    closePopup,
    markFormSubmitted,
  };
};