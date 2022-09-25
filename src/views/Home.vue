<template>
  <section class="min-h-90v flex flex-wrap">
    <div class="flex flex-2-1-40 text-center justify-center items-center flex-col">
      <h2 class="text-4xl
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-dark
                    to-green-500
                    text-transparent pb-10">
        Athanasios Chourlias <br/>
        Software engineer.
      </h2>
      <p class="px-28 py-12 text-2xl font-light text-grey-default">
        Welcome to my domain. You are just a curious individual? That’s very nice so am I,
        here you can find all of my projects and download them so you can experiment with them
        by yourself.Or you just trying to see if I’m worthy of a job position? I’m glad if that
        is the case too, you can find all you need at my software page(bio, projects e.t.c).
        Thank for your visit anyway!
      </p>
      <router-link class="bg-transparent
                            hover:bg-grey-default
                            hover:bg-opacity-25
                            text-black
                            font-semibold
                            hover:text-green-500
                            py-6
                            mt-20
                            px-20
                            border-2
                            border-black
                            rounded-xl"
                   to="/about">
        About
      </router-link>
    </div>
    <div class="flex flex-1-1-40">
      <img src="/public/images/welcome_image.jpg"
                   class="object-cover" alt="welcome image"/>
    </div>
  </section>

  <section class="min-h-screen flex flex-wrap">
    <div class="flex flex-1-1-40 ">
      <img src="/public/images/car-in-straight-photoshoped.jpg"
           class="object-cover w-full h-full"/>
    </div>
    <div class="flex
                  flex-2-1-40
                  text-center
                  items-center
                  justify-around
                  flex-col
                  bg-grey-default
                  text-white">
      <!--TODO: Re-write the about me-->
      <div>
        <h1 class="font-thin text-4xl font-vibes p-10">About me: <br> </h1>

        <p class="px-16 py-7 leading-relaxed font-thin text-3xl font-serif">
          Hello, my name is thanos as you may have guessed.
          I'm a 20 years old student currently studying Informatics and Telematics At
          Harokopeio University of Athens, with interests in engineering, Robotics, 3D printing
          technologies, automation systems and research. Besides university im also working
          at CrowdPolicy and last but not least im part of the formula student team of Aristotle
          University acting as the teams driver, due to 14year racing background.
        </p>
      </div>
    </div>
  </section>

  <contact-info/>

</template>

<script lang="ts">
import contactInfo from "../components/contactInfo.vue"
import {defineComponent} from "vue"

export default defineComponent({
	name: "Home",
	components: {
		"contact-info": contactInfo
	},
})
</script>

<style scoped></style>
