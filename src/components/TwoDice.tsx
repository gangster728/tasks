import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1value, Set1Value] = useState<number>(0);
    const [die2value, Set2Value] = useState<number>(1);
    return (
        <div>
            <span data-testid="left-die">
                <Button
                    onClick={() => {
                        Set1Value(d6());
                    }}
                >
                    Roll Left
                </Button>{" "}
                to {die1value}{" "}
            </span>
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        Set2Value(d6());
                    }}
                >
                    Roll Right
                </Button>{" "}
                to {die2value}
            </span>
            {die1value === die2value && die1value === 1 && die2value === 1 ?
                <span>Lose</span>
            : die1value === die2value && die1value !== 1 && die2value !== 1 ?
                <span>Win</span>
            :   <span></span>}
        </div>
    );
}
