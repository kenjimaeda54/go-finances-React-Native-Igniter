import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeTypes = typeof theme;
  /*com typeof copio toda tipagem,exemplo Theme tem uma inferĂȘncia de tipo
    com typeof estou pegando essa inferĂȘncia     */
  export interface DefaultTheme extends ThemeTypes {}
}
