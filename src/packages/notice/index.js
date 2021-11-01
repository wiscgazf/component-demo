import { createVNode, render } from 'vue';
import { debounce} from '../../utils/util';
import Notice from './notice.vue';
import '../../styles/component/notice.scss'

export default debounce(function (options) {
    const props = {
        zIndex: 999,
        ...options,
        onClose: () => {
        }
    };

    const container = document.createElement('div');

    const vm = createVNode(
        Notice,
        {
            ...props
        }
    );

    render(vm, container);

    document.body.appendChild(container.firstElementChild);

    vm.component.proxy.notices.push(options);
},100);
