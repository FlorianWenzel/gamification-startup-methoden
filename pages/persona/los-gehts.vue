<template>
  <div>
    <div class="d-flex justify-center align-center">
      <iframe
        :width="width"
        :height="height"
        src="https://www.youtube.com/embed/W1kw5xK1C30"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="d-flex justify-end mt-3">
      <NuxtLink to="/persona/erstellen">
        <v-btn color="primary">
          Persona erstellen
          <v-icon right>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class LosGehts extends Vue {
  private width = 300;
  private height = 300 * (9 / 16);

  public mounted () {
    this.width = window.innerWidth * 0.8
    this.height = this.width * (9 / 16)
  }
}
</script>
