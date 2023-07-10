import { ReactAppOptions } from '@teambit/react';

export const Banner: ReactAppOptions = {
  name: 'banner',
  entry: [require.resolve('./banner.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default Banner;
