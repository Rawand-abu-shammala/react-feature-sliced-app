import type {LatLngTuple} from "leaflet";
import {useEffect, useState} from "react";

export const useUserLocation = () => {
    const [location, setLocation] = useState<LatLngTuple | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (import.meta.env.VITE_PROJECT_ENV !== 'client') {
            setLocation([51.5074, -0.1277]);
            setLoading(false);
            return;
        }

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
            return;
        }

        const handleSuccess = (position: GeolocationPosition): void => {
            setLocation([position.coords.latitude, position.coords.longitude]);
            setError(null);
            setLoading(false);
        };

        const handleError = (err: GeolocationPositionError): void => {
            let errorMessage = "Failed to get coordinates";

            switch (err.code) {
                case err.PERMISSION_DENIED:
                    errorMessage = "User denied access to geolocation";
                    break;
                case err.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable";
                    break;
                case err.TIMEOUT:
                    errorMessage = "The request timed out";
                    break;
                default:
                    errorMessage = "Unknown error while retrieving coordinates";
            }

            setError(errorMessage);
            setLoading(false);
        };

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        });
    }, []);

    return {location, error, loading};
};
