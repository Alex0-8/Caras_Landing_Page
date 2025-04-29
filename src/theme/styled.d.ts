import "styled-components";
import Theme from "./index";

type ThemeType = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}