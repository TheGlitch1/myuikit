<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  as?: string
}>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

function onClick(e: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <component
    :is="as ?? 'button'"
    :class="[
      'btn',
      `btn--${variant ?? 'primary'}`,
      `btn--${size ?? 'md'}`,
      { 'btn--disabled': disabled, 'btn--loading': loading },
    ]"
    :disabled="(!as || as === 'button') ? (disabled || loading) : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>
