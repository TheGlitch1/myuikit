<script setup lang="ts">
interface SelectOption {
  label: string
  value: string | number
}

defineProps<{
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
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
        'select-field',
        { 'select-field--error': error, 'select-field--disabled': disabled },
      ]"
    >
      <select
        class="select"
        :value="modelValue"
        :disabled="disabled"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option v-if="placeholder" value="" disabled :selected="!modelValue">
          {{ placeholder }}
        </option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
    <span v-if="error" class="select__error-msg">{{ error }}</span>
  </div>
</template>
