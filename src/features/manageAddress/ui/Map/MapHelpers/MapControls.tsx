import L, {type LatLngTuple} from "leaflet";
import {useEffect, useRef} from "react";
import {useMap} from "react-leaflet";

import AddIcon from "@/shared/assets/icons/Add.svg?react";
import GpsIcon from "@/shared/assets/icons/Gps.svg?react";
import {cn} from "@/shared/lib";
import {AppIcon, Button} from "@/shared/ui";

import styles from "../Map.module.scss";

export const MapControls = ({marker}: { marker: LatLngTuple }) => {
    const map = useMap();
    const controlsRef = useRef<HTMLDivElement>(null);

    const handleCenterMap = () => {
        map.setView(marker, map.getZoom());
    };

    useEffect(() => {
        if (controlsRef.current) {
            L.DomEvent.disableClickPropagation(controlsRef.current);
        }
    }, []);

    const handleZoomIn = () => {
        map.zoomIn();
    };

    const handleZoomOut = () => {
        map.zoomOut();
    };

    return (
        <div ref={controlsRef} className={styles.mapControls}>
            <div className={styles["zoom-buttons"]}>
                <Button
                    form="circle"
                    theme="outline"
                    className={styles["control-button"]}
                    onClick={handleZoomIn}
                >
                    <AppIcon filled Icon={AddIcon}/>
                </Button>
                <Button
                    form="circle"
                    theme="outline"
                    className={styles["control-button"]}
                    onClick={handleZoomOut}
                >
                    —
                </Button>
            </div>
            <Button
                form="circle"
                theme="outline"
                className={cn(styles["control-button"], styles.locate)}
                onClick={handleCenterMap}
            >
                <AppIcon Icon={GpsIcon} className={styles["gps-icon"]}/>
            </Button>
        </div>
    );
};
