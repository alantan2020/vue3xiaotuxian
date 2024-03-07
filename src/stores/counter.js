//导入一个方法defineStore
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  //定义数据（state)
  const count = ref(0);

  //定义修改数据的方法 （action 同步+异步）
  const increment = () => {
    count.value++;
  };

  // getter定义
  const doubleCount = computed(() => count.value * 2);
  const GST = computed(() => count.value * 0.09);
  const totlePrice = computed(() => count.value + GST.value);

  // 以对象的方式 return 供组件使用
  return {
    count,
    doubleCount,
    GST,
    totlePrice,
    increment
  };
});
