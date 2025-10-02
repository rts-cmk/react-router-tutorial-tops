import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>404 — Page not found</h1>
            <p>Sorry, we couldn't find that page.</p>
            <p><Link to="/">Go to home</Link></p>
        </div>
    );
}
