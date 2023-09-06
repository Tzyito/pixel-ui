<script setup lang="ts">
// import { PxInput, PxButton } from 'pixel-ui';
import { PxInput, PxButton } from '@pixel-ui/components';
import { ref } from 'vue';

const text = ref('');
const handleClick = () => {
  console.log('click');
};
</script>

<template>
  <div>
    <ul class="box">
      <li w-25 class="font-pixel">
        <PxInput text-base v-model="text" />
      </li>
      <li>
        <PxInput text-xs v-model="text" />
      </li>
      <li w-10>
        <div grid="~ gap2">
          <PxButton @click="handleClick">click</PxButton>
          <PxButton type="primary" @click="handleClick" style="{--}">click2</PxButton>
          <PxButton type="success" @click="handleClick">click3</PxButton>
          <PxButton type="error" @click="handleClick">click3</PxButton>
          <PxButton type="warning" @click="handleClick">click3</PxButton>
        </div>
      </li>
    </ul>
    <div my-flex>312312</div>
    <div my-flex c-red>
      {{ text }}
    </div>
  </div>
</template>
<style>
.box > li {
  margin-bottom: 10px;
  list-style: none;
}
</style>
