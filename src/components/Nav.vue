<template>
<div class="bg-blue-800 text-blue-200">
    <div class= "container mx-auto flex items-center justify-between">
        <h1 class="tracking-tighter text-3xl font-thin">
            Basic<span class="font-normal">Router</span>
        </h1>
        <nav>
            <ul class="flex space-x-4">
                <router-link to="/">
                <li class="py-8 px-4 hovver:cursor-pointer hover:bg-blue-500 hover:text-blue-800">Home</li>
                </router-link>
                <router-link :to="{name:'About'}">
                <li class="py-8 px-4 hovver:cursor-pointer hover:bg-blue-500 hover:text-blue-800">About</li>
                </router-link>
                <router-link :to="{path: '/news', name:'News'}">
                <li class="py-8 px-4 hovver:cursor-pointer hover:bg-blue-500 hover:text-blue-800">News</li>
                </router-link>
                 <router-link :to="{path: '/contact'}">
                <li class="py-8 px-4 hovver:cursor-pointer hover:bg-blue-500 hover:text-blue-800">Contact</li>
                </router-link>
            </ul>
        </nav>
    </div>
</div>
    
</template>