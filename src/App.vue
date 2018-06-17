<template>
  <v-app light>
    <snake></snake>
  </v-app>
</template>

<script>
  import Vue from 'vue';
  import Snake from './components/Snake';

  export default {
    template: '<Snake/>',
    components: { Snake },
    data() {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: true,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      };
    },
    created() {
      const self = this;
      this.cordova.on('deviceready', () => {
        self.onDeviceReady();
      });
    },
    methods: {
      onDeviceReady() {
      // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false);
        this.cordova.on('resume', this.onResume, false);
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false);
        }
      },
      onPause() {
        // Handle the pause lifecycle event.
        console.log('pause');
      },
      onResume() {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(() => {
          console.log('resume');
        }, 0);
      },
      onBackKeyDown() {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp();
      },
    },
  };
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
