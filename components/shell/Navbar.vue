<script setup>
// Too lazy to markup one by one.
const elements = [
    ['Homepage', '/'],
    ['Services', '/#services'],
    ['Skills', '/#skills'],
    ['Contact', '/#contact'],
];
</script>

<template>
    <ul>
        <li v-for="[title, url] in elements">
            <a :href="url">{{  title }}</a>
        </li>
    </ul>
</template>