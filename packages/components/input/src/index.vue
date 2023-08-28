<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const valueInner = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})
</script>

<template>
  <div w-100 px-1 em:flex:col flex="~ col">
    <input
      v-model="valueInner"
      px-input-base
      px-input-interactive
      type="text"
      placeholder="are you ok?"
    >
    <input placeholder="atrr" px-input-interactive>
  </div>
</template>
