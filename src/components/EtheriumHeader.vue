<script setup>
const navTabs = [
    { label: "Learn", value: "" },
    { label: "Use", value: "" },
    { label: "Build", value: "" },
    { label: "Praticipate", value: "" },
    { label: "Research", value: "" },
];
</script>

<template>
    <header class="text-white py-6 bg-etherium-primary">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center gap-5">
                <p class="text-xl font-bold cursor-pointer">Etherium</p>
                <div class="flex items-center gap-2">
                    <!-- Mapping nav tabs -->
                    <p v-for="(navTab, index) in navTabs" :key="index"
                        class="cursor-pointer hover:bg-[#303030] px-3 py-1 rounded transition-all duration-300">{{
                    navTab.label }}
                    </p>
                </div>
            </div>
            <div>
                <input
                    class="focus:outline-none text-gray-100 py-[6px] px-2 text-sm rounded w-[230px] border border-gray-500 bg-etherium-primaryLight"
                    placeholder="Search For The Content" />
            </div>
        </div>
    </header>
</template>