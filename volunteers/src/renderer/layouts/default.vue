<template>
  <div>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://user-images.githubusercontent.com/39585600/147443810-7a847423-7980-4d80-9779-ce23c62eeb6d.png"
                    alt="Enigma Logo"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                📥&nbsp;&nbsp;Tasks
            </b-navbar-item>
            <b-navbar-item href="#">
                💰&nbsp;&nbsp;Transactions
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <nuxt/>
  </div>
</template>

<script>

export default {
  name: 'DefaultLayout',
}
</script>

<style>
body {
  margin: 0 !important;
}
</style>
