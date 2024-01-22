<template>
  <div class="bg-gradient-to-bl from-orange to-fin min-h-screen font-ubuntu">
    <div class="h-screen flex justify-center items-center">
      <div class="bg-fin w-3/4 block drop-shadow-lg rounded-tl rounded-tr">
        <div class="bg-mine block rounded-tl rounded-tr">
          <nav class="text-white px-2">
            <router-link to="/">Home</router-link> |
            <router-link to="/cv">Curriculum Vitae</router-link> |
            <router-link to="/show-case">Show Case</router-link>
          </nav>
        </div>
        <h1 class="text-center">
          <span class="text-green">$cott Drinkwater</span>
          <span class="text-white">:&nbsp;</span>
          <span class="text-blue">Software Engineer</span>
        </h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
