<template>
  <div class="zf-notice">
    <div class="zf-notice__main" v-for="item in notices" :key="item.id">
      <div class="zf-notice__title">{{ item.title }}</div>
      <div class="zf-notice__content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, watch, onMounted, nextTick } from 'vue';

export default defineComponent({
  name: 'Notice',

  setup() {
    const notices = reactive([]);

    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          notices.splice(0,1)
          const els = document.querySelectorAll('.zf-notice');
          els[0].remove()
        }, notices[0].duration);
      });

    });

    watch(notices, (newVal, preVal) => {
      const els = document.querySelectorAll('.zf-notice');
      els.forEach((elItem, idx) => {
        elItem.style.top = idx * 65 + 'px';
      });
    });

    return { notices };
  }
});
</script>

