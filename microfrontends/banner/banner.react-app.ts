import { ReactAppOptions } from '@teambit/react';

export const BannerApp: ReactAppOptions = {
  name: 'banner',
  entry: [require.resolve('./banner.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default BannerApp;
