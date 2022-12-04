<!-- Description：肺炎疫情地图 -->
<template>
    <div>
      <div style="height:900px" id="main"></div>
    </div>
  </template>
   
  <script>
  import { MP } from '../map.js'
  require('echarts/extension/bmap/bmap')
  export default {
    data () {
      return {
        provinceData: null,
        countryData: null,
   
        timeNow: new Date(),
        timeCount: 0,
   
        echartsDatas: [],
        temp: {},
   
        // convertData: null,
        geoCoordMap: {
          '山东': [117.000923, 36.675807],
          '河北': [115.48333, 38.03333],
          '吉林': [125.35000, 43.88333],
          '黑龙江': [127.63333, 47.75000],
          '辽宁': [123.38333, 41.80000],
          '内蒙古': [111.670801, 41.818311],
          '新疆': [87.68333, 43.76667],
          '甘肃': [103.73333, 36.03333],
          '宁夏': [106.26667, 37.46667],
          '山西': [112.53333, 37.86667],
          '陕西': [108.95000, 34.26667],
          '河南': [113.65000, 34.76667],
          '安徽': [117.283042, 31.86119],
          '江苏': [119.78333, 32.05000],
          '浙江': [120.20000, 30.26667],
          '福建': [118.30000, 26.08333],
          '广东': [113.23333, 23.16667],
          '江西': [115.90000, 28.68333],
          '海南': [110.35000, 20.01667],
          '广西': [108.320004, 22.82402],
          '贵州': [106.71667, 26.56667],
          '湖南': [113.00000, 28.21667],
          '湖北': [114.298572, 30.584355],
          '四川': [104.06667, 30.66667],
          '云南': [102.73333, 25.05000],
          '西藏': [91.00000, 30.60000],
          '青海': [96.75000, 36.56667],
          '天津': [117.20000, 39.13333],
          '上海': [121.55333, 31.20000],
          '重庆': [106.45000, 29.56667],
          '北京': [116.41667, 39.91667],
          '台湾': [121.30, 25.03],
          '香港': [114.10000, 22.20000],
          '澳门': [113.50000, 22.20000]
        }
      }
    },
    created () {
      this.getInfo()
    },
    mounted () {
      // 调用实时刷新的方法
      this.time()
      this.$nextTick(() => {
        MP().then(BMap => {
          this.drawChart()
        })
      })
    },
    destroyed () {
      clearInterval(this.timer)
    },
    methods: {
      getInfo () {
        const timeStamp = new Date().getTime()
        // 此处的 api 是通过配置跨域，将原本的 url 替换成 api 来表示
        const url = `/api/g2/getOnsInfo?name=disease_h5&callback=&_=${timeStamp}`
        this.$http.get(url).then(res => {
          const subData = JSON.parse(res.data.data)
          const china = subData.areaTree[0]
          this.provinceData = china.children
          this.countryData = subData.areaTree
   
          for (var i = 0; i < this.provinceData.length; i++) {
            this.temp.name = this.provinceData[i].name
            this.temp.value = this.provinceData[i].total.confirm
            this.echartsDatas.push(this.temp)
            this.temp = {}
          }
          this.drawChart()
        }).catch(err => {
          console.log(err)
        })
      },
      time () {
        if (this.timer) {
          clearInterval(this.timer)
        } else {
          this.timer = setInterval(() => {
            this.timeNow = new Date()
            this.timeCount += 1
            this.getInfo()
          }, 300000)
        }
      },
   
   
      drawChart () {
        var convertData = (echartsDatas) => {
          var res = []
          // console.log('res1', res)
          // console.log('echartsDatas', echartsDatas)
          for (var i = 0; i < echartsDatas.length; i++) {
            var geoCoord = this.geoCoordMap[echartsDatas[i].name]
            // console.log('geoCoord:', geoCoord)
   
            if (geoCoord) {
              res.push({
                name: echartsDatas[i].name,
                value: geoCoord.concat(echartsDatas[i].value)
              })
            }
          }
          return res
        }
   
        var echarts = require('echarts')
        var myChart = echarts.init(document.getElementById('main'))
        
        // 指定图表的配置项和数据
        var option = {
          backgroundColor: 'transparent',
          title: {
            text: '新型肺炎疫情实时动态',
            subtext: 'Data from news',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: (obj) => {
              var str = ''
              str = '确诊人数</br>' + obj.data.name + ':&nbsp' + obj.data.value[2]
              return str
            }
          },
          bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: false,
          },
          series: [
            {
              name: '确诊人数',
              type: 'effectScatter',
              coordinateSystem: 'bmap',              data: convertData(this.echartsDatas.sort(function (a, b) {
                return b.value - a.value
              }).slice(0, 35)),
              symbolSize: 20,
              // 小圆点是否有“范围圈”
              showEffectOn: 'emphasis',
              rippleEffect: {
                brushType: 'stroke'
              },
              // 控制圆点在 hover 的时候是否变大
              hoverAnimation: true,
              label: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              // 大圆点颜色
              // shadowcolor 圆点阴影颜色
              itemStyle: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#fff'
              },
              zlevel: 1
            }
          ]
        }
        myChart.setOption(option)
      }
    }
  }
  </script>
   
<style scoped>
 body{
  display: none;
 }
</style>