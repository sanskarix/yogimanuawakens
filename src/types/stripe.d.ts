/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as React from "react";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "stripe-buy-button": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & {
            "buy-button-id": string;
            "publishable-key": string;
          },
          HTMLElement
        >;
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "buy-button-id": string;
          "publishable-key": string;
        },
        HTMLElement
      >;
    }
  }
}
