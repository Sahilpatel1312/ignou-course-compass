import { useState, useEffect, useRef, useCallback } from 'react';

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
  const hasTriggeredRef = useRef(false);

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
    
    if (state.isFormSubmitted) return false;
    if (state.lastShownTime && (now - state.lastShownTime) < SHOW_DELAY) return false;
    
    return state.shouldShow;
  };

  // Trigger popup - uses ref to avoid stale closure issues
  const triggerPopup = useCallback(() => {
    if (!hasTriggeredRef.current && canShowPopup()) {
      hasTriggeredRef.current = true;
      setShowPopup(true);
      saveState({ lastShownTime: Date.now() });
    }
  }, []);

  // Time delay trigger
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      triggerPopup();
    }, TIME_TRIGGER);

    return () => clearTimeout(timeoutId);
  }, [triggerPopup]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [triggerPopup]);

  // Scroll depth detection
  useEffect(() => {
    let scrollTriggered = false;

    const handleScroll = () => {
      if (scrollTriggered) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollHeight <= viewportHeight) return;
      
      const scrollPercent = scrollTop / (scrollHeight - viewportHeight);
      
      if (scrollPercent >= SCROLL_TRIGGER) {
        scrollTriggered = true;
        triggerPopup();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPopup]);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

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
