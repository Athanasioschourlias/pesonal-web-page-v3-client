<template>
  <section class="min-h-screen flex flex-col flex-wrap pt-10 mx-80">
    <div class="flex flex-col items-center">
      <div class="w-48 h-1 bg-green-500 rounded-full"></div>
      <div class="pt-2 mb-20">
        <h1 class="text-5xl pt-6 font-thin text-gray-600">
          Wanna start <strong class="font-black">start Work</strong> with me?
        </h1>
      </div>
    </div>
    <div class="flex flex-row justify-evenly">
      <form class="flex flex-col justify-center text-center w-1/2 px-6">
        <h1 class="text-gray-600 font-thin text-3xl">Get in <br/>
          <span class="text-gray-600 font-thin text-7xl">touch.</span>
        </h1>
        <!--        TODO: Make the mandatory boxes turn red when not field -->
        <!--        TODO: Make the form functional, NEED THE CLIENT SERVER. -->
        <div class="my-4">
          <input id="name" v-model="user_name"
                 class="shadow
                                        appearance-none
                                        border
                                        rounded-sm
                                        w-full
                                        my-5
                                        py-2
                                        px-3
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:shadow-outline"
                 type="text"
                 placeholder="Your Name">
          <input id="mail" v-model="user_mail"
                 class="shadow
                                        appearance-none
                                        border
                                        rounded-sm
                                        w-full
                                        py-2
                                        my-5
                                        px-3
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:shadow-outline"
                 type="text"
                 placeholder="Your Mail">
          <input id="phone" v-model="user_phone"
                 class="shadow
                                        appearance-none
                                        border
                                        rounded-sm
                                        w-full
                                        my-5
                                        py-2
                                        px-3
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:shadow-outline"
                 type="text"
                 placeholder="Your Phone (Optional)">

          <textarea v-model="user_input"
                    class="resize-none
                            shadow
                            h-40
                            appearance-none
                            border
                            rounded-sm
                            w-full
                            my-5
                            py-2
                            px-3
                            text-gray-700
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline"
                    placeholder="Write me Something!!"
          />
        </div>

        <div class="flex flex-col items-center">
          <v-btn variant="outlined"
                 @click="send_details()">
            Send it!
          </v-btn>
        </div>
      </form>
      <div class="flex flex-col w-1/2 px-6">
        <h1 class="text-gray-500 font-thin text-3xl mb-16">My Contact Details</h1>
        <h1 class="text-gray-800 font-thin text-xl mb-2">Email</h1>
        <h1 class="text-gray-500 font-thin text-2xl mb-8">thanos.chourlias@gmail.com</h1>
        <h1 class="text-gray-800 font-thin text-2xl mb-2">Address</h1>
        <h1 class="text-gray-500 font-thin text-2xl mb-8">Athens, GR</h1>
      </div>
    </div>
  </section>


</template>

<script lang="ts">
import {defineComponent} from "vue"
import {send_contact_details} from "../services/utilities.service"

export default defineComponent({
	name: "ContactInfo",
	components: {

	},
	data() {
		return {
			user_name: "",
			user_mail:"",
			user_phone: "",
			user_input:""
		}
	},
	methods: {
		send_details() {

			send_contact_details(this.user_name, this.user_mail, this.user_phone, this.user_input)
				.then(_response => {

					this.user_name = ""
					this.user_mail = ""
					this.user_phone = ""
					this.user_input = ""


				})
				.catch(error => {
					console.error(error)
					throw error
				})

		}
	}
})
</script>

<style scoped>

</style>