<script setup lang="ts">
interface NavItem {
  label: string
  icon?: string
  to: string
  active?: boolean
}

defineProps<{
  collapsed?: boolean
  items?: NavItem[]
}>()
</script>

<template>
  <nav :class="['sidebar', { 'sidebar--collapsed': collapsed }]">
    <slot>
      <a
        v-for="item in items"
        :key="item.to"
        :href="item.to"
        :class="['nav-item', { 'nav-item--active': item.active }]"
      >
        <span class="nav-item__icon">{{ item.icon }}</span>
        <span class="nav-item__label">{{ item.label }}</span>
      </a>
    </slot>
    <div class="sidebar__footer">
      <slot name="footer" />
    </div>
  </nav>
</template>
