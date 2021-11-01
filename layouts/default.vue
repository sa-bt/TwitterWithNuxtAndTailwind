<template>
  <div class="container flex h-screen w-full">
    <!--Side nav -->
    <Sidebar/>
    <Nuxt/>
  </div>
</template>

<script>
    import Sidebar from "../components/Sidebar";

    export default {
        name: "default",
        components: {Sidebar}
    }
</script>

<style scoped>

</style>
