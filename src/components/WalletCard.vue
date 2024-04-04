<script setup>
import { store } from "../store/store";
import { ref, watch } from "vue";
import { ETHERIUM_BLOCKCHAIN, POLYGON_BLOCKCHAIN } from "../utils/Constants";
import { getEthBalance } from '../services/walletService.js'
import { getMaticBalance } from '../services/walletService.js'

//Reactive variables to track the current blockchain
const iscurrentBlockChainEtherium = ref(store.currentBlockChain === ETHERIUM_BLOCKCHAIN);
const iscurrentBlockChainPolygon = ref(store.currentBlockChain === POLYGON_BLOCKCHAIN);

//Watch for changes in the current blockchain and update reactive variables accordingly
watch(() => store.currentBlockChain, (newValue) => {
    iscurrentBlockChainEtherium.value = newValue === ETHERIUM_BLOCKCHAIN;
    iscurrentBlockChainPolygon.value = newValue === POLYGON_BLOCKCHAIN;
});

const isMetaMaskInstalled = typeof window.ethereum !== 'undefined'

//Function to fetch balance details based on the current blockchain
const fetchDetailsHandler = () => {
    if (isMetaMaskInstalled) {
        if (store.currentBlockChain === ETHERIUM_BLOCKCHAIN) {
            getEthBalance()
        } else {
            getMaticBalance()
        }
    }
}
</script>

<template>
    <div class="w-full mx-auto  flex-1 text-white py-10"
        :class="{ 'bg-etherium-primaryLight': iscurrentBlockChainEtherium, 'bg-polygon-primaryLight': iscurrentBlockChainPolygon }">
        <div class="container mx-auto  w-fit p-4 rounded-lg min-w-[500px]">

            <!-- Conditionally rendering image -->
            <div v-if="iscurrentBlockChainEtherium">
                <img src='../assets/EthereumIcon.png' class="w-32 h-32 mx-auto mb-6" />
            </div>
            <div v-else>
                <img src="../assets/PolygonIcon.png" class="w-32 h-32 mx-auto mb-6" />
            </div>

            <!-- Wallet Card -->
            <div class="border-2 border-gray-400 shadow-xl p-4 rounded-lg">
                <p class="text-lg font-semibold">Wallet Information : {{ store.currentBlockChain }}</p>
                <div class="flex gap-2">
                    <button @click="store.toggleCurrentBlockChain()"
                        class="bg-gray-300 px-3 py-2 text-gray-700 rounded mt-2 text-sm font-semibold">Toggle
                        BlockChain</button>
                    <button @click="fetchDetailsHandler"
                        class="bg-gray-300 px-3 py-2 text-gray-700 rounded mt-2 text-sm font-semibold">Fetch
                        Details</button>
                </div>
                <div v-if="store.isLoading"
                    class="border-4 w-12 h-12 border-t-gray-500 rounded-full animate-spin my-4 ml-2"></div>
                <div v-else class="my-4 space-y-1">
                    <p>Address: - {{ store.accountAddress }}</p>
                    <p>Balance: - {{ store.currentBlockChainBalance }} {{ store.currentBlockChainBalance ?
                        iscurrentBlockChainEtherium ? 'ETH' : 'MATIC' : '' }}
                    </p>
                    <p>Chain Id: - {{ store.currentChanId }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
