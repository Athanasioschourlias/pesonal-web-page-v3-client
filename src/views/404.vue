<template>
  <section class="min-h-80v flex flex-col justify-center">
      <div class="flex self-center">
          <h1 class="text-6xl
                    font-extrabold
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-dark
                    to-green-500
                    text-transparent
                    p-5">
            OoOoOPSsSs,
          </h1>
      </div>
    <div class="flex self-center">
      <h1 class="text-6xl
                      font-extrabold
                      bg-clip-text
                      bg-gradient-to-r
                      from-purple-dark
                      to-green-500
                      text-transparent
                      p-5">
        You Lost Your Way?
      </h1>
    </div>
      <div class="flex self-center">
        <h1 class="text-9xl
                    font-extrabold
                    bg-clip-text
                    bg-gradient-to-r
                    from-green-500
                    to-purple-dark
                    text-transparent
                    p-16">
                          404
        </h1>
      </div>
    <div class="flex self-center">
      <button class="bg-transparent
                      bg-green-bright
                      hover:bg-green-500
                      text-white
                      font-extrabold
                      py-5
                      px-16
                      rounded-2xl">
        <router-link to="/">Go back!!!</router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
	name: "404.vue"
}
</script>