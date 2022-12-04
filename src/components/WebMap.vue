<template lang="html">
    <div>
      <div class="header">
            <div class="box">
                <h1>
                  <img src="../assets/logo.jpg">
                  <span>Vileplume</span>
                </h1>
                <nav>
                  <ul>
                    <li><router-link active-class="active" to="/home">Home</router-link></li>
                    <li><router-link active-class="active" to="/visual">Viusalization</router-link></li>
                    <li><router-link active-class="active" to="/app">Application</router-link></li>
                    <li><router-link active-class="active" to="/info">Contact me</router-link></li>
                  </ul>
                </nav>
            </div>
            <div class="box">
                <input class="text" type="text" placeholder="Pleace input keywords~~~" name="search" v-model="keyword">
                <input class="button" type="button" value="Search">
                <img src="../assets/logo2.jpg">
            </div>
      </div>

      <div class="container">
        <baidu-map class="map"
        :center="center"
        :zoom="zoom"
        :mapStyle="mapStyle"
        :scroll-wheel-zoom="true"
        @ready="handler">
          <bm-panorama></bm-panorama>
          <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
          <bm-local-search :keyword="keyword" :auto-viewport="true" :pageCapacity="1"></bm-local-search>
          <bm-view class="map"></bm-view>
          <bm-context-menu>
            <bm-context-menu-item :callback="gotoBeijing" text="To Beijing"></bm-context-menu-item>
            <bm-context-menu-item :callback="gotoShanghai" text="To Shanghai"></bm-context-menu-item>
          </bm-context-menu>
        </baidu-map>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 15,
      keyword: '',    
      mapStyle: {
        styleJson: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": {
                "hue": "#007fff",
                "saturation": 89
            }
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#ffffff"
            }
          }
        ]
      },
    }
  },
  
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 113.34773
      this.center.lat = 23.1308
      this.zoom = 25
    }
  },
}
</script>

<style>
#container {
  width: 500px;
  height: 500px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.map {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
}

.find{
  margin-block: 2px;
  margin-left: 100px;
  align-items: center;
  outline-style: none ;
  border: 1px solid #ccc; 
  border-radius: 3px;
  padding: 13px 14px;
  width: 620px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Microsoft soft";
}

.find:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}

.header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        background-color:#292c2f;
        color: #ffffff;
}

.box{
    display: flex;
    align-items: center;
}

h1{
    display: flex;
    align-items: center;
    font: normal 28px Cookie, Arial, Helvetica, sans-serif;
    padding: 0px 20px;
}

img{
    width: 40px;
    height: 40px;
}

nav {
    padding-block: 2px;
    align-items: center;
    text-align: center;
    margin: 0px 40px;
    font:16px Georgia;
}

nav a{
    padding: 0 15px;
    width: 32px;
    text-decoration:none;
    color: #096664;
    font-size: 16px;
    font-weight: normal;
    opacity: 0.9;
}

nav a:hover {
    opacity: 1;
}

.active {
    color: #608bd2;
    pointer-events: none;
    opacity: 1;
}

ul{
  display: flex;
  list-style: none;
} 

.text{
    height: 30px;
    font-size: 14px;
    border-radius: 1px solid rgb(247, 243, 243);
    background-color: rgb(255, 255, 255);
    padding: 3px 16px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

.text:focus{
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 2px 2px rgba(8, 109, 163, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

.button{
    width: 60px;
    height: 30px;
    font-size: 14px;
    margin-right: 35px;
    border: 1px solid #608bd2;
    background-color: #608bd2;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>
