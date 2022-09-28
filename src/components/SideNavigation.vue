<template>
    <v-card>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://lfda.de/image?uid=198&w=687"
            title="Navigation"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
              <v-list-item @click="sel=1" prepend-icon="mdi-home-city" title="Home" value="home" ></v-list-item>
              <v-list-item @click="sel=2" prepend-icon="mdi-account" title="Mein Acccount" value="account" subtitle={{user.value}}></v-list-item>
              <v-list-item @click="sel=3" prepend-icon="mdi-account-group-outline" title="Benutzer" value="users" ></v-list-item>
          </v-list>
        </v-navigation-drawer>
    </v-card >
    <v-main v-if="sel===1">
        <v-toolbar dense>

            <v-toolbar-title>Homepage</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
        <v-tabs
          v-model="tub"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="tab in tabs"
            :key="tab"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>
      </template>
      </v-toolbar>
      <v-tabs-items v-model="tub">
      <v-tab-item
        v-for="tab in tabs"
        :key="tab"
      >
    </v-tab-item>
    </v-tabs-items>
      <v-container >
        <h1>Ein Test</h1>
        <home-page-vue/>
      </v-container>

    </v-main>

    <v-main v-else-if="sel===2">
      <v-toolbar dense>

        <v-toolbar-title>Mein Account</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
</v-toolbar>
      <v-container >
        <h1>Herzlich Willkommen {{user.value}} </h1>
        <h2>das ist deine Accountpage</h2>
        <account-page-vue/>
      </v-container>
    </v-main>

    <v-main v-else-if="sel===3">
      <v-toolbar dense>

        <v-toolbar-title>Alle Benutzer</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
</v-toolbar>
      <v-container >
        <h1>Der letzte Test</h1>
        <user-page-vue/>
      </v-container>
    </v-main>
  </template>

<script setup>
import { ref } from 'vue'
import HomePageVue from './HomePageVue.vue'
import AccountPageVue from './AccountPageVue.vue'
import UserPageVue from './UserPageVue.vue'
import { useUserStore } from '../stores/User'

const user = useUserStore()

const drawer = ref(true)
const items = ref([
  { title: 'Home', icon: 'mdi-home-city' },
  { title: 'My Account', icon: 'mdi-account' },
  { title: 'Users', icon: 'mdi-account-group-outline' }
])
const tabs = ref([
  'web', 'shopping', 'videos', 'images', 'news', user.value
])
const rail = ref(true)
const sel = ref(1)
const tub = ref(null)
</script>
