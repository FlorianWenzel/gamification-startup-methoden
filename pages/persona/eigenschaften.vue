<template>
  <div class="h-100 w-100">
    <v-row>
      <v-col>
        <v-textarea v-model="personality" outlined label="Persönlichkeit" full-width :rows="10" />
      </v-col>
      <v-col>
        <div class="d-flex justify-center">
          <img :src="imgUrl" alt="">
        </div>
        <div class="d-flex justify-center mt-3">
          {{ name }}, {{ age }}
        </div>
      </v-col>
      <v-col>
        <v-textarea v-model="interests" outlined label="Interessen" :rows="10" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea v-model="abilities" outlined label="Fähigkeiten" :rows="10" />
      </v-col>
      <v-col>
        <v-textarea v-model="techSavvy" outlined label="Technikaffinität" :rows="10" />
      </v-col>
    </v-row>
    <div class="d-flex">
      <NuxtLink to="/persona/erstellen">
        <v-btn color="secondary">
          <v-icon left>
            mdi-arrow-left
          </v-icon>
          Zurück
        </v-btn>
      </NuxtLink>
      <v-btn color="primary" class="ml-auto" @click="todo">
        Fertig!
        <v-icon right>
          mdi-arrow-right
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Eigenschaften extends Vue {
  private imgUrl = ''
  mounted () {
    if (process.browser) { this.imgUrl = window.localStorage.getItem('avatar') || '' }
  }

  public name = (process.browser && window?.localStorage?.getItem('name')) || ''
  public age = (process.browser && window?.localStorage?.getItem('age')) || ''

  set personality (value: string) {
    if (process.browser) { window.localStorage.setItem('personality', value) }
  }

  get personality () {
    if (process.browser) { return window.localStorage.getItem('personality') || '' }
    return ''
  }

  set interests (value: string) {
    if (process.browser) { window.localStorage.setItem('interests', value) }
  }

  get interests () {
    if (process.browser) { return window.localStorage.getItem('interests') || '' }
    return ''
  }

  set abilities (value: string) {
    if (process.browser) { window.localStorage.setItem('abilities', value) }
  }

  get abilities () {
    if (process.browser) { return window.localStorage.getItem('abilities') || '' }
    return ''
  }

  set techSavvy (value: string) {
    if (process.browser) { window.localStorage.setItem('techSavvy', value) }
  }

  get techSavvy () {
    if (process.browser) { return window.localStorage.getItem('techSavvy') || '' }
    return ''
  }

  todo () {
    alert('Todo?')
  }
}
</script>
