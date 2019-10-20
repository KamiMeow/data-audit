<template>
  <v-layout>
    <!-- <v-img :src="require('@/assets/map.png')">
    </v-img> -->
    <map-view :all-loading="allHidden" />

    <v-fade-transition>
      <v-layout
        v-if="!allHidden"
        fill-height
        column
        dark
        class="pa-12 statistic-layout"
      >
        <v-slide-y-transition v-if="!isMap">
          <v-flex xs2 class="pa-8">
            <div>
              <span class="text-uppercase display-3 font-weight-light">Нефтегазовые </span><span class="display-2 font-weight-light"> доходы</span>
            </div>

            <div class='text-uppercase font-weight-light display-1'>
              Бюджета в {{ year }} году
            </div>
          </v-flex>
        </v-slide-y-transition>

        <v-flex xs6>
          <v-layout fill-height align-center class="mx-8">
            <v-flex xs1 />
            <v-slide-x-transition>
              <v-flex xs5 v-if="!isMap">
                <v-layout class="justify-end">
                  <diagram value="33" />
                </v-layout>
              </v-flex>
            </v-slide-x-transition>

            <v-fade-transition>
              <v-flex xs1 class="display-3" v-if="!isMap">=</v-flex>
            </v-fade-transition>

            <v-slide-x-reverse-transition>
              <v-flex xs4 v-if="!isMap">
                <v-layout column>
                  <v-flex class="display-1 font-weight-light text-center" style="width: 300px">
                    <v-layout wrap justify-center>
                      <v-flex xs12>13% поступление от акцизов<v-divider /></v-flex>
                      <v-divider vertical style="height: 80px; margin-left: 90px;" />
                    </v-layout>
                  </v-flex>
                  
                  <v-flex>
                    <v-layout>
                      <div class="display-2 font-weight-light">5,9 трлн руб.</div>
                      <v-divider class="mt-7" />
                      <div class="display-1 font-weight-light"><v-divider vertical /> 8% ВВП</div>
                    </v-layout>
                  </v-flex>

                  <v-flex class="display-1 font-weight-light text-center mt-5" style="width: 300px">
                    <v-layout wrap justify-center>
                      <v-divider vertical style="height: 80px; margin-right: 97px;" />
                      <v-flex xs12>
                        <v-divider /> 13% поступление от акцизов
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-slide-x-reverse-transition>
          </v-layout>
        </v-flex>

        <v-flex xs1 />
        <v-flex xs2>
          <v-slide-y-reverse-transition>
            <v-layout justify-center v-if="!isMap">
              <v-btn
                class="map-button"
                outlined
                light
                @click="openMap"
              >Карта</v-btn>
            </v-layout>
          </v-slide-y-reverse-transition>
        </v-flex>
      </v-layout>
    </v-fade-transition>
  </v-layout>
</template>

<script>
import Diagram from '@/components/Diagram';
import MapView from './Map';

export default {
  name: 'mainPage',
  components: { Diagram, MapView },
  data: () => ({
    isMap: false,
    allHidden: false,
  }),
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  methods: {
    openMap() {
      this.isMap = true;
      setTimeout(() => {
        this.allHidden = true;
      }, 350);
    },
  },
};
</script>

<style>
  /* .map > .v-responsive .v-image {
    overflow: visible;
  } */
  .map-button {
    width: 300px;
    height: 60px !important;
    border-radius: 0;
    font-size: 19px !important;
    border: 2px solid black;
  }

  .statistic-layout {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ffffff6c;
  }
</style>
