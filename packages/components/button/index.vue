<script lang="ts" setup>
import { ButtonProps } from './props';
const props = defineProps(ButtonProps);
</script>
<template>
  <button v-bind="$attrs" px-button-base :class="[`px-button-${props.type}`]">
    <div>
      <i v-if="props.icon" :class="props.icon"></i>
      <slot />
    </div>
  </button>
</template>
