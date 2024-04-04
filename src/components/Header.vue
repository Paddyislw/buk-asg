<script setup>
import { store } from "../store/store";
import { ref, watch } from "vue";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";
import PolygonHeader from "./PolygonHeader.vue";
import EtheriumHeader from "./EtheriumHeader.vue";

//Reactive variables to track the current blockchain
const iscurrentBlockChainEtherium = ref(
  store.currentBlockChain === ETHERIUM_BLOCKCHAIN
);
const iscurrentBlockChainPolygon = ref(
  store.currentBlockChain === POLYGON_BLOCKCHAIN
);

//Watch for changes in the current blockchain and update reactive variables accordingly
watch(
  () => store.currentBlockChain,
  (newValue) => {
    iscurrentBlockChainEtherium.value = newValue === ETHERIUM_BLOCKCHAIN;
    iscurrentBlockChainPolygon.value = newValue === POLYGON_BLOCKCHAIN;
  }
);
</script>

<template>
  <div v-if="iscurrentBlockChainEtherium">
    <EtheriumHeader />
  </div>
  <div v-else>
    <PolygonHeader />
  </div>
</template>
