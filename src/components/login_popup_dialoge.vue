<template>
  <v-dialog class="flex flex-column">
    <v-card width="auto">
      <v-sheet class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-form
              v-model="form"
              @submit.prevent="onSubmit"
          >
            <v-text-field
                v-model="username"
                :readonly="loading"
                :rules="[required]"
                label="Username"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :readonly="loading"
                :rules="[required]"
                label="Password"
                type="password"
                placeholder="Enter your password"
            ></v-text-field>

            <br>

            <v-btn
                :disabled="!form"
                :loading="loading"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
              {{buttonText}}
            </v-btn>
            
            <p class="text-medium-emphasis">
              Get weekly post collections by becoming a member,
              <a
                  color="primary"
                  class="text-decoration-underline"
                  @click="toggleButtonText"
              >Register</a>
            </p>
          </v-form>
        </v-card>
      </v-sheet>
      <v-card-actions>
        <v-btn color="primary" block
               @click="$emit('updateProp', false)">
          Close Dialog
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script lang="ts">
import {logInUser} from "../services/authorization.service"
import {defineComponent} from "vue"
import {login_resp} from "../types/auth.types"
import {register_member} from "../services/admin.service"

export default defineComponent({
	name: "AdminPage",
	props: {
		dialog: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			register: false,
			form: false,
			username: "",
			password: "",
			loading: false,
			wrong_pass: false
		}
	},
	computed: {
		buttonText() {
			return this.register ? "Register" : "Log In"
		}
	},
	methods: {
		toggleButtonText() {
			this.register = !this.register
		},
    
		onSubmit () {
			if(!this.form) return

			this.loading = true

			if(this.register)
				this.registerOne()
			else
				this.login()

			setTimeout(() => (this.loading = false), 2000)

			this.$emit("updateProp", false)
		},
		
		required (v: any) {
			return !!v || "Field is required"
		},
    
		login() {

			logInUser(this.username, this.password).then((user_token: login_resp) => {
				if(!user_token) {
					console.log("The username or password was incorrect")
					this.wrong_pass = true
				}
				else {
					this.wrong_pass = false
					this.$emit("updateProp", false)

					//Storing the token and role to local storage
					localStorage.setItem("token", JSON.stringify({ token: user_token.token }))
					localStorage.setItem("role", JSON.stringify({ role: user_token.user.role }))

					console.log(localStorage.getItem("role"))

				}
				this.reloadPage()
			})
		},
    
		registerOne() {
			register_member(this.username, this.password).then((res) => {
				console.log(res)

				this.reloadPage()
			}).catch((err) => {
				console.log(`The user could not be crated: ${err}`)
				this.reloadPage()
			})
		},
    
		reloadPage() {
			window.location.reload()
		}
	}

})

</script>

<style scoped></style>
