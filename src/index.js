import Button from './packages/button/index.js'

import './styles/index.scss';


const components = {
    zfButton: Button,
}

const install = function (Vue, options = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}

export default install

