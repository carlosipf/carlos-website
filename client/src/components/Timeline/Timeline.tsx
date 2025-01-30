// Timeline.tsx
import React from "react";
import { TimelineEntry } from "./types";
import "./Timeline.css";

interface TimelineProps {
    data: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    return (
        <div className="timeline-container">
            {data.map((entry, index) => (
                <TimelineItem key={index} entry={entry} />
            ))}
        </div>
    );
};

interface TimelineItemProps {
    entry: TimelineEntry;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ entry }) => {
    const {
        title,
        subtitle,
        dateRange,
        location,
        description,
        link,
        side,
        icon,
    } = entry;

    // Decide which CSS class to apply for left or right
    const sideClass = side === "right" ? "timeline-item-right" : "timeline-item-left";

    return (
        <div className={`timeline-item ${sideClass}`}>
            <div className="timeline-content">
                <div className="timeline-header">
                    {icon && <span className="timeline-icon">{icon}</span>}
                    <h3 className="timeline-title">{title}</h3>
                </div>
                <h4 className="timeline-subtitle">
                    {subtitle}{" "}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "0.3rem" }}
                        >
                            🔗
                        </a>
                    )}
                </h4>
                <p className="timeline-dates">{dateRange}</p>
                <p className="timeline-location">{location}</p>
                {description && <p className="timeline-description">{description}</p>}
            </div>
        </div>
    );
};

export default Timeline;
