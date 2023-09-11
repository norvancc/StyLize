<template>
  <div ref="canvasContainerRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { Stylize } from './index';

const canvasContainerRef = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    const stylize = new Stylize({
      width: 800,
      height: 800,
      container: canvasContainerRef.value,
    });
    stylize.draw({
      type: 'noise',
      data: {
        url: '/src/assets/c.jpg',
        intensity: 380,

        // amplitude: 10,
        // frequency: 0.5,
      },
    });
  });
});
</script>

<style scoped></style>
