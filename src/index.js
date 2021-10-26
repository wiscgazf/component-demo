import Button from './packages/button';
import Notice from './packages/notice';

import './styles/index.scss';


const components = {
    zfButton: Button
};

const install = function (app, options = {}) {
    Object.keys(components).forEach(key => {
        app.component(key, components[key]);
    });

    app.config.globalProperties.$notice = Notice;
};

export default install;

