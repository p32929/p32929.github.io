import * as amplitude from '@amplitude/analytics-browser';

export const amplitudeEvents = {
    hovered_on_person_icon: "hovered_on_person_icon",
    clicked_on_person_icon: "clicked_on_person_icon",
    clicked_on_left_navigation_route: "clicked_on_left_navigation_route",
    clicked_on_goto_top: "clicked_on_goto_top",
    opened_share_dialog: "opened_share_dialog",
    opened_direct_message_dropdown: "opened_direct_message_dropdown",
    clicked_direct_message_item: "clicked_direct_message_item",
    clicked_github_icon: "clicked_github_icon",
    clicked_on_share_item: "clicked_on_share_item",
    clicked_goto_next_section: "clicked_goto_next_section",
    clicked_goto_prev_section: "clicked_goto_prev_section",
    hovered_on_item: "hovered_on_item",
    clicked_on_item: "clicked_on_item"
}

export class Amplitude {
    private static isInitialized = false;

    // Initialize Amplitude (should be done once in your app)
    private static initialize() {
        if (!this.isInitialized) {
            const apiKey: string = "e37663cf29fe51d539d511c5390b650c";
            amplitude.init(apiKey, {
                defaultTracking: {
                    pageViews: false, // Manually tracking page views
                    sessions: true, // Automatically track session data
                },
                autocapture: true,
            });
            this.isInitialized = true;
        }
    }

    // Get browser information
    private static getBrowserInfo(): string {
        const { userAgent } = navigator;
        return userAgent;
    }

    // Get screen resolution
    private static getScreenResolution(): string {
        return `${window.screen.width}x${window.screen.height}`;
    }

    // Get the current page URL
    private static getCurrentPageUrl(): string {
        return window.location.href;
    }

    // Log event with additional client-side data
    private static logEvent(eventName: string, eventData: Record<string, any> = {}) {
        this.initialize(); // Ensure Amplitude is initialized before logging any events
        const browserInfo = this.getBrowserInfo();
        const screenResolution = this.getScreenResolution();
        const pageUrl = this.getCurrentPageUrl();

        const enrichedEventData = {
            ...eventData,
            browserInfo,
            screenResolution,
            pageUrl,
        };

        amplitude.track(eventName, enrichedEventData);
    }

    static trackCustomEvent(eventName: string, eventData: Record<string, any>) {
        this.logEvent(eventName, eventData);
    }
}

// Usage example:
// Amplitude.trackCustomEvent('Custom Event', { key: 'value' });
