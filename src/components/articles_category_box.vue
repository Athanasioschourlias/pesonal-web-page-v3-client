<template>
  <button class="h-auto w-full my-10"
        :class="{ 'menu-clicked':arrowDir,  'menu-default':!arrowDir }">
    <div class="my-4 flex flex-row mx-8 items-center"
      @click="arrowDir = !arrowDir">
      <font-awesome-icon
          :icon=arrowDirection
          size="md"
          :class="{'text-black':arrowDir, 'text-gray-500':!arrowDir}"/>
      <div class="mx-12">
        <h1 class="font-normal text-xl"
            :class="{'text-black':arrowDir, 'text-gray-500':!arrowDir}">{{categoryTitle}}</h1>
      </div>
    </div>
  </button>

  <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <articles-template v-if="arrowDir"
                         id="dropdown"
                         first-img-u-r-l="Connectivity_PI_Uno(customfit).jpeg"
                         second-img-url="Car_Computers_mount.jpeg"
                         article-text="
        This combo you see here is what i use for the prototyping phase of the CropsSpy robot,
        this two computers are handling all the information that is needed
        to be computed so the robot can drive itshelf,
        navigate(Through GPS), Recognize the different kind of plants(With Deep Learning)
        and in the future more complete versions this two Computers will handle also the
        movement of the arms that is necessary in order to eleminate the hostile plants."
                         article-title="C.S Alpha V1.0">
        <!--Techical specification list-->
        <li>Status: Used right now</li>
        <li>In service: Aug 2020 - to this day</li>
        <li>MCU: ATMEGA8U2-MU(Arduino)-BCM2711(Rasberry Pi 4)</li>
        <li>IMU: - (Arduino & Rasberry Pi)</li>
        <li>Software: C.S_1.0(Arduino) - Rasbian && C.S_1.0(Rasberry Pi 4)</li>
        <li>Library's(Essential): OpenCV,TensorFlow</li>
      </articles-template>
  </transition>

</template>

<script lang="ts">
import {defineComponent} from "vue"
import development_articles from "./development_articles.vue"

export default defineComponent({
	name: "ArticlesCategoryBox",
	components: {
		"articles-template": development_articles
	},
	props: {
		categoryTitle: String
	},
	data(){
		return {
			arrowDown: ["fa", "chevron-down"],
			arrowUp: ["fa", "chevron-up"],
			arrowDir: false
		}
	},
	computed: {
		arrowDirection: function() {
			return this.arrowDir ? this.arrowUp : this.arrowDown
		}
	},
	methods: {

	}

})
</script>

<style scoped lang="postcss">

.menu-clicked {
  @apply shadow-2xl bg-gray-100  rounded-t-md
}

.menu-default {
  @apply shadow-inner-md rounded-md
}

</style>