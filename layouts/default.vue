<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <template
          v-for="(page, i) in pageList"
        >
          <v-list-item
            v-if="!page.sub || !page.sub.length"
            :key="i"
            :to="page.to"
            :disabled="page.disabled"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="page.title" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            :key="i"
            :prepend-icon="page.icon"
          >
            <template #activator>
              <v-list-item
                :disabled="page.disabled"
                router
                exact
              >
                <v-list-item-content>
                  <v-list-item-title v-text="page.title" />
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(innerpage, i) in page.sub"
              :key="i"
              :to="innerpage.to"
              :disabled="innerpage.disabled"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ innerpage.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="innerpage.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt ref="page" />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span class="ml-auto">Gamification Startup-Methoden Team :)</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Page, pages } from '~/const/pages.const'

@Component({})
export default class Default extends Vue {
  private title = 'Gamification Startup Methoden';

  private drawer = false;

  get pageList (): Page[] {
    return pages
  }
}
</script>
<style>
.h-100{
  height: 100%!important;
}
.w-100 {
  width: 100%!important;
}
</style>
