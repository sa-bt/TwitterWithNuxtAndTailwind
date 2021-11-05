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
      <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
        <textarea v-model="tweet.content" name="" placeholder="What's up?" class="w-full focus:outline-none mt-3 mb-3"
                  id=""></textarea>
        <div class="flex items-center ">
          <i class="text-lg text-blue mr-4 far fa-image"></i>
          <i class="text-lg text-blue mr-4 fas fa-film"></i>
          <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
          <i class="text-lg text-blue mr-4 far fa-smile"></i>
        </div>
        <button type="submit"
                class="h-10 px-4 text-white bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
          Tweet
        </button>
      </form>
    </div>
    <div class="flex flex-col-reverse">
      <div v-for="(tweet, index) in tweets" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img src="pic.jpg" alt="" class="h-12 w-12 rounded-full flex-none">
        </div>
        <div class="w-full">
          <div class="flex items-center w-full ">
            <p class="font-semibold ">Sabt</p>
            <p class="text-sm text-dark ml-2 ">@bakhshian2020</p>
            <p class="text-sm text-dark ml-2 ">1 sec</p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{tweet.content}}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p>0</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-heart mr-3"></i>
              <p>1</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div v-for="(follow, index) in following" :key="index" class="w-full p-4 border-b hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img :src="`${follow.src}`" alt="" class="h-12 w-12 rounded-full flex-none">
      </div>
      <div class="w-full">
        <div class="flex items-center w-full ">
          <p class="font-semibold ">{{follow.name}}</p>
          <p class="text-sm text-dark ml-2 ">{{follow.handle}}</p>
          <p class="text-sm text-dark ml-2 ">{{follow.time}}</p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{follow.tweet}}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-comment mr-3"></i>
            <p>{{follow.comments}}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3"></i>
            <p>{{follow.retweets}}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-heart mr-3"></i>
            <p>{{follow.like}}</p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-share-square mr-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tweet",
        data() {
            return {
                following: [
                    {
                        src: 'parisa.jpg',
                        name: 'Parisa',
                        handle: '@parisa70',
                        time: '20 min',
                        tweet: 'What’s the best thing about Switzerland?\n' + 'I don’t know, but the flag is a big plus.',
                        comments: '50',
                        retweets: '41',
                        like: '1000'
                    },
                    {
                        src: 'amin.jpg',
                        name: 'Amin Bakhtiari',
                        handle: '@amin1365',
                        time: '55 min',
                        tweet: 'Did you hear about the mathematician who’s afraid of negative numbers?\n' + 'He’ll stop at nothing to avoid them.',
                        comments: '60',
                        retweets: '320',
                        like: '750'
                    },
                    {
                        src: 'jalle.jpg',
                        name: 'Jalle',
                        handle: '@Jalle551245',
                        time: '14 hr',
                        tweet: 'Why do we tell actors to “break a leg?”\n' + 'Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.',
                        comments: '100',
                        retweets: '940',
                        like: '1,850'
                    },
                    {
                        src: 'ali.jpg',
                        name: 'Ali Hoseini',
                        handle: '@aliHoseini74',
                        time: '12 day',
                        tweet: 'Helvetica and Times New Roman walk into a bar.\n' + '“Get out of here!” shouts the bartender. “We don’t serve your type.”',
                        comments: '14,000',
                        retweets: '4251',
                        like: '12,000'
                    }
                ],
                tweets: [
                    {content: 'It is so not outside'}
                ],
                tweet: {content: ''}
            }
        },
        methods: {
            addNewTweet() {
                let newTweet = {
                    content: this.tweet.content
                }
                this.tweets.push(newTweet);
            }
        }
    }
</script>

<style scoped>

</style>
