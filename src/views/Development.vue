<template>
  <div class="mx-2 lg:mx-24 flex flex-col h-auto">
    <section class="w-full h-52 flex items-center overflow-hidden justify-center">
      <img class="object-cover" src="/public/images/Development/coding_dev.png"/>
      <h1 class="text-white
                  text-xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  absolute
                  font-thin">Development</h1>
    </section>

    <category_box img-u-r-l="Control_computers.png"
                  title-bold="Hardware"
                  short-desc-text="Learn more about the"
                  button-text="Control Computers"
                  router-to="/dev/hardware"/>

    <category_box img-u-r-l="chassis.jpg"
                  title-bold="Chassis"
                  short-desc-text="All about the structure of my creations"
                  button-text="Chassis"
                  router-to="/dev/chassis"/>


  </div>
</template>

<script>
import {defineComponent} from "vue"
import development_category_box from "../components/development_category_box.vue"

export default defineComponent({
	name: "Development",
	components: {
		"category_box": development_category_box
	}
})
</script>
