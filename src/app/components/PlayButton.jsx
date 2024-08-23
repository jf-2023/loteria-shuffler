"use client";
import { useState } from "react";

export function Play ({ playGameState }) {
    return (
        <div>
            <button className="playButton" onClick={pullCard}>
                {buttonState}
            </button>
            /*HOMEWORK: 
            - display past cards shown 
            - fix visuals
            - change alert to something else
            - setTimeout
            */
        </div>
    );
};