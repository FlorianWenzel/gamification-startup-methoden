<template>
  <v-row class="pa-3 d-flex">
    <v-col cols="12" sm="3">
      {{ name }}
    </v-col>
    <v-col cols="12" sm="6">
      <v-slider
        v-model="numberValue"
        dense
        hide-details
        hint="Im a hint"
        :max="options.length - 1"
        :min="0"
      />
    </v-col>
    <v-col cols="12" sm="3">
      <v-btn @click="numberValue = numberValue ? (numberValue - 1) : (options.length - 1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn @click="numberValue = (numberValue + 1) % options.length">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({})
export default class Slider extends Vue {
  @Prop()
  private name!: string

  @Prop()
  private options!: string[]

  @Prop()
  private valueProp!: string

  private numberValue = this.options.indexOf(this.valueProp);

  @Watch('numberValue')
  private updateValue () {
    this.value = this.options[this.numberValue]
  }

  set value (value: string) {
    this.$emit('setValue', value)
  }

  get value () {
    return this.valueProp
  }
}
</script>
