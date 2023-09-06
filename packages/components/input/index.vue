<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
const valueInner = computed({
  get() {
    console.log(props);
    return props.modelValue;
  },
  set(val) {
    emits('update:modelValue', val);
  },
});
</script>

<template>
  <div v-bind="$attrs">
    <div box-base>
      <input
        v-model="valueInner"
        px-input-base
        placeholder-transition
        focus:placeholder-translate-x-1
        type="text"
        placeholder="are you ok?"
      />
    </div>
  </div>
</template>
