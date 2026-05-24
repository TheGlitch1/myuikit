<script setup lang="ts">
defineProps<{
  title?: string
  path?: string
}>()
</script>

<template>
  <header class="topbar">
    <span v-if="title" class="topbar__title">{{ title }}</span>
    <span v-if="path" class="topbar__path">{{ path }}</span>
    <div class="topbar__actions">
      <slot name="actions" />
    </div>
  </header>
</template>
