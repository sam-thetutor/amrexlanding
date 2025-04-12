import {defineConfig} from '@junobuild/config';

export default defineConfig({
  satellite: {
    id: 'vv4p7-5yaaa-aaaal-asc7a-cai',
    source: 'out',
    predeploy: ['pnpm build']
  }
});
