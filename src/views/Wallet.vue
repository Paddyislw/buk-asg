<script setup>
import WalletCard from "../components/WalletCard.vue";
const isMetaMaskInstalled = typeof window.ethereum !== 'undefined'
</script>

<template>
    <!-- Checking if metmaks extension is installed or not -->
    <div v-if="isMetaMaskInstalled" class="flex-1 flex flex-col">
        <WalletCard />
    </div>
    <div v-else class="flex-1 flex flex-col">
        <div class="flex-1 w-full justify-center items-center bg-[#131314]">
            <p class="text-center text-white text-xl font-semibold mt-12 cursor-pointer">Metamask extension not
                installed</p>
        </div>
    </div>
</template>
