<template>
  <v-layout row>
    <v-flex xs10 offset-xs1>
      <v-card class="mb-3 card--flex-toolbar" hover>
        <v-card-media class="white--text" height="200px" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-3590.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Montag</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-actions>
          <v-btn flat color="purple" :to="'/Montag'">Start</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            <v-list subheader>
               <v-subheader>Übungen</v-subheader>
               <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="">
                 <v-list-tile-content>
                   <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                   <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                 </v-list-tile-content>
                 <v-list-tile-action>
                   <v-btn icon ripple>
                     <v-icon color="grey lighten-1">info</v-icon>
                   </v-btn>
                 </v-list-tile-action>
               </v-list-tile>
             </v-list>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        show: false,
        items: [
          { title: 'sit ups', subtitle: '50 Stück' },
          { title: 'plank', subtitle: '40 Sekunden' },
          { title: 'arnold press', subtitle: '3×10 Stück' },
          { title: 'Judo push ups', subtitle: '3×2 Stück' },
          { title: 'dumbbell flys', subtitle: '3x5 Stück' },
          { title: 'spiderman pushups', subtitle: '3×3 Stück' },
          { title: 'Liegestütze', subtitle: '3x5/8 Stück' }
        ]
      }
    }
  }
</script>
<style>
  .card--flex-toolbar {
  margin-top: -64px;
  }
</style>
