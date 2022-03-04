import type { NextPage } from 'next';
import { ThemeProvider } from '../../styles';
import { globalStyles } from '../../styles/global';

import { dark } from '../../styles/themes/dark';
import { light } from '../../styles/themes/light';

const Home: NextPage = () => {
  return (
    <ThemeProvider className={dark}>
      {globalStyles()}
    </ThemeProvider>
  )
}

export default Home
