<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="card">
    <slot name="header">
      <div v-if="title" class="card__title">{{ title }}</div>
    </slot>
    <div class="card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
