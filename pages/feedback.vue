<template>
  <div>
    <div class="d-flex justify-center align-center mt-15">
      <v-card>
        <v-card-title>
          Freut uns, das Sie unsere Testversion ausprobiert haben!
        </v-card-title>
        <v-card-text>
          Bitte nehmen Sie sich noch eine Minute Zeit und geben uns ein kurzes Feedback.
          <br>Vielen Dank!
        </v-card-text>
        <v-card-actions>
          <form @submit="submit">
            <h3>
              Fanden Sie diese Methode der Wissensübermittlung interessant?
            </h3>
            <v-radio-group
              v-model="data.question1"
              row
            >
              <v-radio label="Nein" value="nein" />
              <v-radio label="Eher nicht" value="eherNicht" />
              <v-radio label="Ich weiß nicht" value="idk" />
              <v-radio label="Eher ja" value="eherJa" />
              <v-radio label="Ja" value="ja" />
            </v-radio-group>
            <v-textarea v-model="data.note1" outlined rows="2" auto-grow label="Anmerkungen? (optional)" />

            <h3>
              Würden Sie in Erwägung ziehen das (fertige) Produkt zu verwenden?
            </h3>
            <v-radio-group
              v-model="data.question2"
              row
            >
              <v-radio label="Nein" value="nein" />
              <v-radio label="Eher nicht" value="eherNicht" />
              <v-radio label="Ich weiß nicht" value="idk" />
              <v-radio label="Eher ja" value="eherJa" />
              <v-radio label="Ja" value="ja" />
            </v-radio-group>
            <v-textarea v-model="data.note2" outlined rows="2" auto-grow label="Anmerkungen? (optional)" />

            <h3>
              Sind Sie neugierig auf das komplette Produkt?
            </h3>
            <v-radio-group
              v-model="data.question3"
              row
            >
              <v-radio label="Nein" value="nein" />
              <v-radio label="Eher nicht" value="eherNicht" />
              <v-radio label="Ich weiß nicht" value="idk" />
              <v-radio label="Eher ja" value="eherJa" />
              <v-radio label="Ja" value="ja" />
            </v-radio-group>
            <v-textarea v-model="data.note3" outlined rows="2" auto-grow label="Anmerkungen? (optional)" />

            <h3>
              Können Sie sich vorstellen, dass das fertige Produkt Ihren Berufsalltag verbessert?
            </h3>
            <v-radio-group
              v-model="data.question4"
              row
            >
              <v-radio label="Nein" value="nein" />
              <v-radio label="Eher nicht" value="eherNicht" />
              <v-radio label="Ich weiß nicht" value="idk" />
              <v-radio label="Eher ja" value="eherJa" />
              <v-radio label="Ja" value="ja" />
            </v-radio-group>
            <v-textarea v-model="data.note4" outlined rows="2" auto-grow label="Anmerkungen? (optional)" />

            <h3>
              Gibt es sonst noch etwas, was Sie uns mitteilen wollen?
            </h3>
            <v-textarea v-model="data.note" rows="5" auto-grow outlined />

            <h3>
              Wie dürfen wir Sie bei eventuell anfallenden Rückfragen kontaktieren? (optional)
            </h3>
            <v-text-field v-model="data.mail" label="E-Mail / Telefonnummer" />

            <v-btn type="submit">
              <v-icon v-if="loading" left>
                mdi-loading
                mdi-spin
              </v-icon>
              Senden
            </v-btn>
          </form>
        </v-card-actions>
      </v-card>
    </div>
    <v-dialog v-model="thxDialog" max-width="300" light @click:outside="$router.push({path: '/'})">
      <v-card>
        <v-card-title>
          Danke!
        </v-card-title>
        <v-card-actions>
          <v-btn class="ml-auto" @click="$router.push({path: '/'})">
            Schliessen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { FeedbackDto } from '~/dto/feedback.dto'

@Component({})
export default class Feedback extends Vue {
  private data: FeedbackDto = {
    question1: 'idk',
    note1: '',
    question2: 'idk',
    note2: '',
    question3: 'idk',
    note3: '',
    question4: 'idk',
    note4: '',
    note: '',
    mail: ''
  }

  private loading = false;
  private thxDialog = false;

  private async submit (e: Event) {
    e.preventDefault()

    this.loading = true

    await fetch('/api/feedback', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(this.data)
    })

    setTimeout(() => {
      this.loading = false
      this.thxDialog = true
    }, 1000)
  }
}
</script>
<style scoped>
h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
