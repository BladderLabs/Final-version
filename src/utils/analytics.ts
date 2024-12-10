import type { AnalyticsEvent } from '../types';

export const trackEvent = async (event: AnalyticsEvent) => {
  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

export const trackPageView = (page: string) => {
  trackEvent({
    type: 'pageview',
    page,
    timestamp: new Date().toISOString(),
  });
};

export const trackAffiliateClick = (linkId: string, destination: string) => {
  trackEvent({
    type: 'affiliate_click',
    linkId,
    destination,
    timestamp: new Date().toISOString(),
  });
};