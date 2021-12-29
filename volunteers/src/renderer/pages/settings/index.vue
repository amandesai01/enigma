<template>
  <div class="paddingify-small">
      <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <tr>
              <td>
                <nuxt-link :to="'/settings/personal'">
                    General
                </nuxt-link>
              </td>
          </tr>
          <tr>
              <td>
                <nuxt-link :to="'/settings/computations'">
                    Computations
                </nuxt-link>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>