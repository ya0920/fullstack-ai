<template>
    <nav>
        <router-link to="/">父子通讯</router-link> |
        <router-link to="/about">子父通讯</router-link>
    </nav>
    <router-view />
</template>

<style scoped>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 10px;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>