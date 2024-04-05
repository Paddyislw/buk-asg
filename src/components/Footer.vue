<script setup>
import { store } from "../store/store";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";
</script>

<template>
  <footer class=" text-white py-10 "
    :class="{ 'bg-polygon-primary': store.currentBlockChain === POLYGON_BLOCKCHAIN, 'bg-etherium-primary': store.currentBlockChain === ETHERIUM_BLOCKCHAIN, 'bg-gray-900': store.currentBlockChain === '' }">
    <div class="container mx-auto">
      <p>&copy; 2024 My Wallet App. All rights reserved.</p>
    </div>
  </footer>
</template>
