<script setup>
const navTabs = [
    { label: "Solutions", value: "" },
    { label: "Developers", value: "" },
    { label: "Community", value: "" },
    { label: "Resources", value: "" },
    { label: "Company", value: "" },
];
</script>

<template>
    <header class="text-white py-6 bg-polygon-primary">
        <div class="container mx-auto flex justify-between items-center ">
            <div class="flex items-center gap-5">
                <p class="text-xl font-bold cursor-pointer">Polygon</p>
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
                    class="focus:outline-none text-gray-300 py-[6px] px-3 text-sm rounded w-[230px] border border-gray-500 bg-polygon-primaryLight"
                    placeholder="Search For The Content" />
            </div>
        </div>
    </header>
</template>