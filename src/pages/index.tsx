import type { NextPage } from 'next';
import { ThemeProvider } from '../../styles';
import { globalStyles } from '../../styles/global';

import { dark } from '../../styles/themes/dark';

const Home: NextPage = () => (
  <ThemeProvider className={dark}>
    {globalStyles()}
  </ThemeProvider>
);

export default Home;
