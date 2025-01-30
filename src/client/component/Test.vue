<template>
  <div>{{ count }}</div>
  <button @click="onClick">
    增加 1
  </button>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
  },
}
</script>
