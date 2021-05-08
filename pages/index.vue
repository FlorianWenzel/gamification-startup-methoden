<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <div class="text-center" />
      <v-card>
        <v-card-title class="headline">
          Willkommen zur Startup-Methoden Gamification Testversion
        </v-card-title>
        <v-card-text>
          <p>
            Zunächst ist nur das "Persona" Kaptiel freigeschaltet. Bald folgt mehr!
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/persona/los-gehts">
            Los gehts!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {

}
</script>
