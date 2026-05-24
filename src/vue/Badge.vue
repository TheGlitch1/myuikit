<script setup lang="ts">
defineProps<{
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
}>()
</script>

<template>
  <span :class="['badge', `badge--${variant ?? 'neutral'}`]">
    <slot />
  </span>
</template>
