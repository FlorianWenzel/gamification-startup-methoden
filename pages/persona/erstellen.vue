<template>
  <div>
    <v-row>
      <v-col class="ma-5">
        <v-row>
          <v-col class="d-flex justify-center">
            <v-img
              :max-height="600"
              :max-width="500"
              :src="url"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field v-model="name" label="Name" @change="value => setValue('name', value)" />
            <v-text-field v-model="age" type="number" label="Alter" @change="value => setValue('age', value)" />
          </v-col>
          <v-col>
            <v-radio-group v-model="gender" label="Geschlecht" @change="value => setValue('gender', value)">
              <v-radio value="male" label="m" />
              <v-radio value="female" label="w" />
              <v-radio value="other" label="d" />
            </v-radio-group>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <Slider :options="avatars.tops" name="Tops" :value-prop="hair" @setValue="value => hair = value" />
        <Slider :options="avatars.accessories" name="Brille" :value-prop="accessory" @setValue="(value) => setValue('accessory', value)" />
        <Slider :options="avatars.hairColors" name="Haarfarbe" :value-prop="hairColor" @setValue="(value) => setValue('hairColor', value)" />
        <Slider :options="avatars.beards" name="Bart" :value-prop="beard" @setValue="(value) => setValue('beard', value)" />
        <Slider :options="avatars.clothes" name="Kleidung" :value-prop="cloth" @setValue="(value) => setValue('cloth', value)" />
        <Slider :options="avatars.clothColors" name="Kleidungsfarbe" :value-prop="clothColor" @setValue="(value) => setValue('clothColor', value)" />
        <Slider :options="avatars.eyes" name="Augen" :value-prop="eyes" @setValue="(value) => setValue('eyes', value)" />
        <Slider :options="avatars.eyebrows" name="Augenbrauen" :value-prop="eyebrow" @setValue="(value) => setValue('eyebrow', value)" />
        <Slider :options="avatars.mouths" name="Mund" :value-prop="mouth" @setValue="(value) => setValue('mouth', value)" />
        <Slider :options="avatars.skins" name="Hautfarbe" :value-prop="skin" @setValue="(value) => setValue('skin', value)" />
      </v-col>
    </v-row>
    <div class="d-flex">
      <NuxtLink to="/persona/los-gehts">
        <v-btn color="secondary">
          <v-icon left>
            mdi-arrow-left
          </v-icon>
          Zurück zum Video
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/persona/eigenschaften" class="ml-auto">
        <v-btn color="primary">
          So passts!
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
import * as avataaars from '~/const/avataaars.const'

@Component({})
export default class Erstellen extends Vue {
  private imageBaseUrl = 'https://avataaars.io/?avatarStyle=Circle'
  get url () {
    const url = `${this.imageBaseUrl}&topType=${this.hair}&accessoriesType=${this.accessory}&hairColor=${this.hairColor}&facialHairType=${this.beard}&clotheType=${this.cloth}&clotheColor=${this.clothColor}&eyeType=${this.eyes}&eyebrowType=${this.eyebrow}&mouthType=${this.mouth}&skinColor=${this.skin}&facialHairColor=${this.hairColor}`
    if (process.browser) { window.localStorage.setItem('avatar', url) }
    return url
  }

  get avatars () {
    return avataaars
  }

  private setValue (type: keyof Erstellen, value: string) {
    if (process.browser) { window.localStorage.setItem(type, value) }
    // @ts-ignore
    this[type] = value
  }

  public hair = (process.browser && window?.localStorage?.getItem('hair')) || 'LongHairMiaWallace'
  public accessory = (process.browser && window?.localStorage?.getItem('accessory')) || 'Sunglasses'
  public hairColor = (process.browser && window?.localStorage?.getItem('hairColor')) || 'Black'
  public beard = (process.browser && window?.localStorage?.getItem('beard')) || 'Blank'
  public cloth = (process.browser && window?.localStorage?.getItem('cloth')) || 'ShirtScoopNeck'
  public clothColor = (process.browser && window?.localStorage?.getItem('clothColor')) || 'PastelRed'
  public eyes = (process.browser && window?.localStorage?.getItem('eyes')) || 'Happy'
  public eyebrow = (process.browser && window?.localStorage?.getItem('eyebrow')) || 'Default'
  public mouth = (process.browser && window?.localStorage?.getItem('mouth')) || 'Twinkle'
  public skin = (process.browser && window?.localStorage?.getItem('skin')) || 'Pale'

  public name = (process.browser && window?.localStorage?.getItem('name')) || 'Mia'
  public age = (process.browser && window?.localStorage?.getItem('age')) || 24
  public gender: 'male' | 'female' | 'other' = (process.browser && window?.localStorage?.getItem('gender') as 'male' | 'female' | 'other') || 'female'
}
</script>
