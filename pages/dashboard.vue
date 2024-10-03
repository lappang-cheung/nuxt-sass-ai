<script setup lang="ts">

</script>

<template>
  <div>
    <div class="mb-8">
      <h2>Explore the power of AI</h2>
      <p>Chat with the smartest AI - Explore the power of AI</p>
    </div>
    <div>
      <div v-for="tool in tools"
           :key="tool.label"
           @click="navigateTo(`/${tool.link}`)"
           class="p-4 border-muted border flex items-center justify-between hover:shadow-sm transition cursor-pointer">
        <div class="flex items-center gap-x-4">
          <div :class="`p-2 w-fit rounded-md ${tool.bgColor}`">
            <Icon :name="tool.icon" :class="`h-8 w-8 ${tool.color}`" />
          </div>
          <div class="font-semibold">
            {{ tool.label }}
          </div>
        </div>
        <Icon name="lucide:arrow-right"
              class="w-5 h-5"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
