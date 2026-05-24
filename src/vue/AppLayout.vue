<script setup lang="ts">
defineProps<{
  sidebarCollapsed?: boolean
}>()
</script>

<template>
  <div :class="['app-layout', { 'app-layout--sidebar-collapsed': sidebarCollapsed }]">
    <div class="app-layout__topbar">
      <slot name="topbar" />
    </div>
    <div class="app-layout__sidebar">
      <slot name="sidebar" />
    </div>
    <main class="app-layout__main">
      <slot />
    </main>
  </div>
</template>
