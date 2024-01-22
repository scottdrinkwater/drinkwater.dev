<template>
  <h1 class="text-center">
    <div>
      <span class="text-green">$cott Drinkwater</span>
      <span class="text-white">:&nbsp;</span>
      <span class="text-blue">Software Engineer</span>
    </div>
    <div>
      <span class="text-white">{{ title }}</span>
    </div>
  </h1>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string;
}

defineProps<Props>();
</script>
