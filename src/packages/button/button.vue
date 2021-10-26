<template>
  <button class="zf-button" :class="{[`zf-button-${type}`]: true}" type="button" @click="click">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return oneOf(value, [ 'default', 'primary', 'info', 'success', 'warning', 'error' ]);
      },
      type: String,
      default: 'default'
    }
  },

  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>
