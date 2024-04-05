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

// Function to switch to the Polygon blockchain
const polygonChange = async () => {
    // Request to switch to the Polygon blockchain
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x89' }],
    });
    // Update the current blockchain to Polygon in the store
    store.updateCurrentBlockChain(POLYGON_BLOCKCHAIN)
}

// Function to switch to the Ethereum blockchain
const etheriumChange = async () => {
    // Request to switch to the Ethereum blockchain
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x1' }],
    });
    // Update the current blockchain to Ethereum in the store
    store.updateCurrentBlockChain(ETHERIUM_BLOCKCHAIN)
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
                    
                    <div class="flex items-center gap-2 mr-2">
                        <div class="border-2 w-4 h-4 rounded-full p-1 "
                            :class="{ 'bg-blue-500': iscurrentBlockChainEtherium }" @click="etheriumChange">
                        </div>
                        <label for="ethereum">Ethereum</label>
                        <div class="border-2 w-4 h-4 rounded-full p-1 "
                            :class="{ 'bg-blue-500': iscurrentBlockChainPolygon }" @click="polygonChange">

                        </div>
                        <label for="polygon">Polygon</label>
                    </div>

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
