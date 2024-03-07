<script setup>
//1.导入 use打头的方法
import { useCounterStore} from '@/stores/counter'

//2.执行方法得到store实例对象
const counterStore = useCounterStore()


</script>

<template>
<button @click="counterStore.increment" >{{ counterStore.count }}</button>
<h1>没有包括GST的价钱{{ counterStore.count }}</h1>
<h1>{{ counterStore.doubleCount }}</h1>
-------
<h1>GST {{ counterStore.GST }}</h1>
<h1> totlePrice {{  counterStore.totlePrice }}</h1>
</template>

<style scoped>
</style>
