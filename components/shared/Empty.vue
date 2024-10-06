<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="h-full p-20 flex flex-col items-center justify-center">
    <div class="relative h-72 w-72">
      <img class="w-full h-full"
           src="/NotFound.png" alt="empty"/>
    </div>
    <p class="text text-muted-foreground text-sm text-center">
      {{ label}}
    </p>
  </div>
</template>

<style lang="scss" scoped>

</style>
