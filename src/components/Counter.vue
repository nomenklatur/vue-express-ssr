<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../store.js'
  import { storeToRefs } from 'pinia'
  
  const store = useCounterStore()
  const { count } = storeToRefs(store)
  const { increment } = store
  </script>