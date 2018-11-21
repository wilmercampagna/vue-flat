<template>
  <div id="app">
<tag-component text="paco"></tag-component>
  </div>
</template>

<script>
import { tagComponent } from '../src/index'
export default {
  name: 'app',
  components: {
    tagComponent
  }
}
</script>
