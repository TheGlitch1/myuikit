<script setup lang="ts">
defineProps<{
  modelValue?: string | number
  placeholder?: string
  type?: string
  disabled?: boolean
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <div>
    <div
      :class="[
        'input-field',
        { 'input-field--error': error, 'input-field--disabled': disabled },
      ]"
    >
      <span v-if="$slots.prefix" class="input-field__prefix">
        <slot name="prefix" />
      </span>
      <input
        class="input"
        :type="type ?? 'text'"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="$slots.suffix" class="input-field__suffix">
        <slot name="suffix" />
      </span>
    </div>
    <span v-if="error" class="input__error-msg">{{ error }}</span>
  </div>
</template>
