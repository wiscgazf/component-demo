---
title: Button
---

# 按钮

<script>
export default {
  data() {
    return {
      button: '默认'
    };
  },
  methods:{
    open(){
        this.$notice({
            title: '提示',
            content: 'asdasd',
            duration: 3000
        })
    }
  }
};
</script>

<zf-button>{{button}}</zf-button> &ensp;
<zf-button type="primary" @click='open'>主色</zf-button> &ensp;
<zf-button type="success">成功</zf-button> &ensp;
<zf-button type="info">提示</zf-button> &ensp;
<zf-button type="info">提示</zf-button>

### 使用

```html
<zf-button>默认</zf-button>
<zf-button type="primary">主色</zf-button>
<zf-button type="success">成功</zf-button>
<zf-button type="info">提示</zf-button>
```
