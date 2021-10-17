import ZfUI from '../../src/index.js';
import '../../src/styles/index.scss';

import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(ZfUI);
});
