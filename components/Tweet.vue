<template>
  <div class="w-1/2 h-full overflow-y-scroll">
    <div class="px-5 py-3 border-b border-lighter flex items-center justify-between ">
<h1 class="text-xl font-bold">Home</h1>
      <i class="far fa-star text-lg text-blue"></i>
    </div>
    <div class="px-5 py-3 border-b-8 border-lighter flex ">
      <div class="flex-none">
        <img src="pic.jpg" alt="" class="flex-none w-12 h-12 rounded-full border border-lighter ">
      </div>
      <form class="w-full px-4 relative">
        <textarea name="" placeholder="What's up?" class="w-full focus:outline-none mt-3 mb-3" id="" ></textarea>
        <div class="flex items-center ">
          <i class="text-lg text-blue mr-4 far fa-image"></i>
          <i class="text-lg text-blue mr-4 fas fa-film"></i>
          <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
          <i class="text-lg text-blue mr-4 far fa-smile"></i>
        </div>
        <button class="h-10 px-4 text-white bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">Tweet</button>
      </form>
    </div>



    <div class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tweet"
    }
</script>

<style scoped>

</style>
