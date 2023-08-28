<script setup lang="ts">
import { PxInput } from 'pixel-ui'
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <div>
    <PxInput v-model="text" />
    <div my-flex c-red>
      {{ text }}
    </div>
  </div>
</template>
