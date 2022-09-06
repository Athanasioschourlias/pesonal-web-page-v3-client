<template>
  <section class="w-full flex flex-row py-16 px-16 sm:mx-2 md:mx-2 lg:mx-16">
    <div class="md:px-4 lg:px-10 w-0 md:w-2/4 lg:w-2/4 flex items-center justify-center">
      <img class="object-cover h-56 invisible md:visible lg:visible" :src="finalUrl" />
    </div>
    <div class="px-2 lg:px-16 w-full md:w-1/3 lg:w-1/3 flex flex-col ">
      <div class="w-16 h-0.5 bg-green-500 rounded-full"/>
      <h1 class="mt-5 text-3xl font-thin text-gray-500 my-6">
        {{titleThin}}
        <strong class="text-gray-600 font-bold">{{titleBold}}</strong>
      </h1>
      <h1 class="font-thin text-grey-default text-3xl my-6">
        {{shortDescText}}
      </h1>
        <button class="bg-transparent
                            transition
                            duration-500
                            ease-in-out
                            hover:bg-grey-default
                            text-grey-400
                            font-normal
                            text-xl
                            hover:text-white
                            mt-6
                            w-full
                            sm:w-2/3
                            md:w-2/3
                            lg:w-2/3
                            py-2
                            px-5
                            border
                            border-grey-default
                            hover:border-transparent
                            rounded"
                  @click="goTo">
          {{buttonText}}
        </button>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {ImageModuleObject} from "../types/image"
import router from "../helpers/router"

export default defineComponent({
	name: "DevelopmentCategoryBox",
	props: {
		imgURL: String,
		titleThin: String,
		titleBold: String,
		buttonText: String,
		shortDescText: String,
		routerTo: String
	},
  
	data() {
		return {
			finalUrl: ""
		}
	},
	created() {
		this.getImageUrl().then((url) => {
			this.finalUrl = url.default
		})

	},
	methods: {
		async getImageUrl(): Promise<ImageModuleObject> {
			return {
				default: `/images/Development/${this.imgURL}`
			} as ImageModuleObject
		},
		goTo: function (){
			if(this.routerTo)
				router.replace(this.routerTo)
		}
	}
})
</script>

<style scoped>

</style>