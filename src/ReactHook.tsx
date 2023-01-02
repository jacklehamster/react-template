import React from "react";
import * as ReactDOMClient from "react-dom/client";

export default class GL {
    static hookup(hud: HTMLDivElement, Node: () => JSX.Element): void {
        const hudRoot = ReactDOMClient.createRoot(hud);
        hudRoot.render(<Node />);
    }
}

