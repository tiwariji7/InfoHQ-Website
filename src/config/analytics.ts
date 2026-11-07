/**
 * InfoHQ Analytics & Retargeting Pixel Configuration
 *
 * HOW TO USE:
 * 1. You can paste your IDs directly in the defaults below, OR
 * 2. Set them in your environment variables (.env file or Cloudflare / Host dashboard):
 *    - PUBLIC_META_PIXEL_ID="YOUR_PIXEL_ID"
 *    - PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
 *    - PUBLIC_LINKEDIN_PARTNER_ID="YOUR_PARTNER_ID"
 */

export const ANALYTICS_CONFIG = {
  /**
   * Meta (Facebook / Instagram) Pixel ID
   * Active InfoHQ Pixel
   */
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || '1786810120113651',

  /**
   * Google Analytics 4 Measurement ID
   * Get it from: https://analytics.google.com -> Admin -> Data Streams -> G-XXXXXXXXXX
   */
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || '',

  /**
   * LinkedIn Insight Tag Partner ID (Optional for B2B Retargeting)
   * Get it from: https://www.linkedin.com/campaignmanager
   */
  linkedInPartnerId: import.meta.env.PUBLIC_LINKEDIN_PARTNER_ID || '',
};

