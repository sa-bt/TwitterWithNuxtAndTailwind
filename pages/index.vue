<template>
  <div class="container flex h-screen w-full m-auto">
    <!--Side nav -->
    <Sidebar/>
    <Tweet/>
  <Trending/>
</div>
</template>

<script>
import Tweet from "../components/Tweet";
import Trending from "../components/Trending";
export default {
    components: {Trending, Tweet}
}
</script>
