<script setup>
import WalletCard from "../components/WalletCard.vue";
import { getCurrentNetworkId } from "../services/walletService";
import { ref } from 'vue'

const isMetaMaskInstalled = typeof window.ethereum !== 'undefined'
const loading = ref(true)
getCurrentNetworkId(loading)
console.log(loading.value)
</script>

<template>
    <!-- Checking if metmaks extension is installed or not -->
    <div v-if="isMetaMaskInstalled" class="flex-1 flex flex-col">
        <div v-if="loading.value" class="flex justify-center mt-10">
            <div class="border-4 w-12 h-12 border-t-gray-500 rounded-full animate-spin my-4 ml-2"></div>
        </div>
        <div v-else class="flex-1 flex flex-col">
            <WalletCard />
        </div>
    </div>
    <div v-else class="flex-1 flex flex-col">
        <div class="flex-1 w-full justify-center items-center bg-[#131314]">
            <p class="text-center text-white text-xl font-semibold mt-12 cursor-pointer">Metamask extension not
                installed</p>
        </div>
    </div>
</template>
