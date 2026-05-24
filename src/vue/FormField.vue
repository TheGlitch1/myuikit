<script setup lang="ts">
defineProps<{
  label?: string
  for?: string
  required?: boolean
  error?: string
  help?: string
}>()
</script>

<template>
  <div class="form-field">
    <label
      v-if="label"
      :class="['form-field__label', { 'form-field__label--required': required }]"
      :for="for"
    >{{ label }}</label>
    <slot />
    <span v-if="error" class="form-field__error">{{ error }}</span>
    <span v-else-if="help" class="form-field__help">{{ help }}</span>
  </div>
</template>
