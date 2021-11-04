<template>
  <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative ">
    <input type="text" class="pl-12 rounded-full p-2 bg-lighter text-sm mb-4 " placeholder="Search Twitter">
    <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
    <div class="w-full rounded-lg bg-lightest ">
      <div class="flex items-center justify-between p-3 ">
        <p class="text-lg font-bold">Trends for You</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button v-for="(trend,index) in trends" :key="index"
              class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
        <div class="text-sm text-left leading-tight">
          <p class="text-sm text-left leading-tight text-dark">{{trend.top}}</p>
          <p class="font-bold text-left leading-tight">{{trend.title}}</p>
          <p class="text-left leading-tight text-dark">{{trend.bottom}}</p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show more
      </button>
    </div>


    <div class="w-full rounded-lg bg-lightest my-4">
      <div class=" p-3 ">
        <p class="text-lg font-bold">Who to Follow</p>
      </div>
      <button v-for="(friend,index) in friends" :key="index"
              class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
        <img :src="friend.src" alt="" class="w-12 h-12 rounded-full border border-lighter">
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-bold leading-light">{{friend.name}}</p>
          <p class="text-sm leading-light">{{friend.handle}}</p>
        </div>
        <button class="text-sm text-blue py-1 px-4 rounded-full border-2 border-blue ml-auto">Follow</button>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show more
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Trending",
        data() {
            return {
                trends: [
                    {top: 'trending in US', title: 'Gigi', bottom: '100k Tweets'},
                    {top: 'trending in US', title: 'Gigi', bottom: '100k Tweets'},
                    {top: 'trending in US', title: 'Gigi', bottom: '100k Tweets'},
                    {top: 'trending in US', title: 'Gigi', bottom: '100k Tweets'},
                    {top: 'trending in US', title: 'Gigi', bottom: '100k Tweets'},
                ],
                friends:[
                    {src:'parisa.jpg', name:'Parisa',handle:'@parisa70'},
                    {src:'amin.jpg', name:'Amin Bakhtiari',handle:'@amin1365'},
                    {src:'jalle.jpg', name:'Jalle',handle:'@Jalle551245'},
                    {src:'ali.jpg', name:'Ali Hoseini',handle:'@aliHoseini74'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
