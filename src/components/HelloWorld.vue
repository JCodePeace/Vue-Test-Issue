<template>
  <div class="hello">
      <div>
          <span id="test_1"></span>
          <span v-if="v" id="test_2"></span>
      </div>
  </div>
</template>

<script setup lang="ts">

import {defineProps, onMounted, ref} from "vue";

let props = defineProps({
    vis: {
        type: Boolean
    }
});

const v = ref(false)

onMounted(() => {
    if (props.vis) {
        v.value = true
    }
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
