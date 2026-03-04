import type React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'location-id'?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

export {};