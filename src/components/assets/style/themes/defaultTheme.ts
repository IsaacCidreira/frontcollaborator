import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      secundary: string;
      backgroundSeundary: string;
      textPrimary: string;
      textSecunday: string;
    };
  }
}
