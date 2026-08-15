// Use relative API URL in development so MSW can intercept requests
const resolvedApiUrl =
    import.meta.env.VITE_PROJECT_ENV === "client"
        ? ""
        : import.meta.env.VITE_API_URL;

// Helpful logs during development
if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("Resolved API_URL (dev):", resolvedApiUrl);
}

export const API_URL = resolvedApiUrl;