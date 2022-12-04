<template>
  <div class="result">
      <el-tabs type="border-card" v-model="name">
        <el-tab-pane label="GDP of each province" name="0">
          <div ref="chart1" style="width: 800px;height:600px;"></div>
        </el-tab-pane>
        <el-tab-pane label="GDP of each country" name="1">
          <div ref="chart2" style="width: 800px;height:600px;" class="charts-two"></div>
        </el-tab-pane>
        <el-tab-pane label="" name="2">
          <div ref="chart3" style="width: 800px;height:600px;"></div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
 
 
// 词云图
<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
 
export default {
  name: "VisitShow",
  data() {
    return {
      userVisitNum: [],
      date: [],
      goodVisitNum: [],
      goodsName: [],
      name: "0",
    };
  },

  mounted() {
    this.showEeharts();
  },
 
  methods: {
    showEeharts() {
      var chart1 = echarts.init(this.$refs.chart1);
      var chart2 = echarts.init(this.$refs.chart2);
      var chart3 = echarts.init(this.$refs.chart3);
      var data1 = [
          {'name': 'BEIJING', value: 40269.6},
          {'name': 'SHANGHAI', value: 43214.9},
          {'name': 'GUANGDONG', value: 124369.7},
          {'name': 'SICHUANG', value: 53850.8},
          {'name': 'XINJIANG', value: 15983.6},
          {'name': 'XIZANG', value: 2080.2},
          {'name': 'NEIMENGGU', value: 20514.2},
          {'name': 'SHANDONG', value: 83095.9},
          {'name': 'JIANGSU', value: 116364.2},
          {'name': 'ZHEJIANG', value: 73515.8},
          {'name': 'HUNAN', value: 46063.1},
          {'name': 'HUBEI', value: 50012.9},
          {'name': 'HAINAN', value: 6475.2},
          {'name': 'GUANGXI', value: 24740.9},
          {'name': 'JIANGXI', value: 29619.7},
          {'name': 'ANHUI', value: 42959.2},
          {'name': 'SHANXI', value: 22590.2},
          {'name': 'HEBEI', value: 40391.3},
          {'name': 'TIANJIN', value: 15695.0},
          {'name': 'HEILONGJIANG', value: 14879.2},
          {'name': 'LIAONING', value: 27584.1},
          {'name': 'JILING', value: 13235.5},
          {'name': 'FUJIAN', value: 48810.4},
          {'name': 'GANSU', value: 10243.3},
          {'name': 'HENAN', value: 58887.4},
          {'name': 'CHONGQING', value: 27894.0},
          {'name': 'GUIZHOU', value: 19586.4},
          {'name': 'YUNAN', value: 27146.8},
          {'name': 'NINGXIA', value: 4522.3},
          {'name': 'QINGHAI', value: 3346.6},
          {'name': 'SHANANXI', value: 29801.0},
          {'name': 'HONGKONG', value: 25835.9},
          {'name': 'MACOU', value: 2099.3},
          {'name': 'TAIWAN', value: 49853.7},
      ]
      var data2 = [
            {'name':'UnitedStates', value:20893746},
            {'name':'China', value:14722801},
            {'name':'EuropeanUnion', value:15292201},
            {'name':'Japan', value:5057759},
            {'name':'Germany', value:3846414},
            {'name':'India', value:2664749},
            {'name':'UnitedKingdom', value:2764198},
            {'name':'France', value:2630318},
            {'name':'Canada', value:1644037},
            {'name':'Russia', value:1483498},
            {'name':'Italy', value:1888709},
            {'name':'Iran', value:939316},
            {'name':'Brazil', value:1444733},
            {'name':'SouthKorea', value:1637896},
            {'name':'Australia', value:1423473},
            {'name':'Mexico', value:1073439},
            {'name':'Spain', value:1281485},
            {'name':'Indonesia', value:1058424},
            {'name':'SaudiArabia', value:700118},
            {'name':'Netherlands', value:913865},
            {'name':'Turkey', value:720098},
            {'name':'Taiwan', value:669324},
            {'name':'Switzerland', value:752248},
            {'name':'Poland', value:596618},
            {'name':'Argentina', value:383067},
            {'name':'Sweden', value:541064},
            {'name':'Belgium', value:521861},
            {'name':'Thailand', value:501795},
            {'name':'Israel', value:407101},
            {'name':'Ireland', value:425889},
            {'name':'Norway', value:362522},
            {'name':'Nigeria', value:429899},
            {'name':'UnitedArabEmirates', value:358869},
            {'name':'Egypt', value:369309},
            {'name':'Austria', value:433258},
            {'name':'Bangladesh', value:329484},
            {'name':'Malaysia', value:336664},
            {'name':'Singapore', value:339988},
            {'name':', vietnam', value:271158},
            {'name':'SouthAfrica', value:302141},
            {'name':'Philippines', value:361489},
            {'name':'Denmark', value:356085},
            {'name':'Pakistan', value:257829},
            {'name':'HongKong', value:349445},
            {'name':'Colombia', value:271347},
            {'name':'Chile', value:252940},
            {'name':'Romania', value:248716},
            {'name':'CzechRepublic', value:245349},
            {'name':'Iraq', value:166757},
            {'name':'Finland', value:269751},
            {'name':'Portugal', value:228539},
            {'name':'NewZealand', value:212044},
            {'name':'Peru', value:203196},
            {'name':'Kazakhstan', value:171082},
            {'name':'Greece', value:188835},
            {'name':'Qatar', value:146401},
            {'name':'Ukraine', value:155582},
            {'name':'Algeria', value:147689},
            {'name':'Hungary', value:155808},
            {'name':'Kuwait', value:105949},
            {'name':'Morocco', value:114724},
            {'name':'Angola', value:62307},
            {'name':'PuertoRico', value:103138},
            {'name':'Ecuador', value:98808},
            {'name':'Kenya', value:101014},
            {'name':'Slovakia', value:105173},
            {'name':'DominicanRepublic', value:78845},
            {'name':'Ethiopia', value:96611},
            {'name':'Oman', value:63368},
            {'name':'Cuba', value:107352},
            {'name':'Guatemala', value:77605},
            {'name':'Bulgaria', value:69888},
            {'name':'Luxembourg', value:73353},
            {'name':', venezuela', value:106359},
            {'name':'Belarus', value:60259},
            {'name':'Uzbekistan', value:57707},
            {'name':'Tanzania', value:64740},
            {'name':'Ghana', value:68532},
            {'name':'Turkmenistan', value:42845},
            {'name':'SriLanka', value:80677},
            {'name':'Uruguay', value:53629},
            {'name':'Panama', value:52938},
            {'name':'Azerbaijan', value:42607},
            {'name':'Croatia', value:57204},
            {'name':'IvoryCoast', value:61143},
            {'name':'CostaRica', value:61521},
            {'name':'Lithuania', value:56547},
            {'name':'DRCongo', value:45308},
            {'name':'Serbia', value:53335},
            {'name':'Slovenia', value:53590},
            {'name':'Myanmar', value:70284},
            {'name':'Uganda', value:38702},
            {'name':'Jordan', value:43697},
            {'name':'Tunisia', value:39218},
            {'name':'Cameroon', value:39881},
            {'name':'Bahrain', value:33904},
            {'name':'Bolivia', value:36573},
            {'name':'Sudan', value:62057},
            {'name':'Paraguay', value:35304},
            {'name':'Libya', value:29153},
            {'name':'Latvia', value:33707},
            {'name':'Estonia', value:30650},
            {'name':'Nepal', value:33079},
            {'name':'Zimbabwe', value:21787},
            {'name':'ElSalvador', value:24639},
            {'name':'PapuaNewGuinea', value:23619},
            {'name':'Honduras', value:23828},
            {'name':'TrinidadandTobago', value:21393},
            {'name':'Cambodia', value:25291},
            {'name':'Iceland', value:21718},
            {'name':'Yemen', value:27958},
            {'name':'Senegal', value:24412},
            {'name':'Zambia', value:18111},
            {'name':'Cyprus', value:24612},
            {'name':'Georgia', value:15892},
            {'name':'BosniaandHerzegovina', value:19801},
            {'name':'Macau', value:24333},
            {'name':'Gabon', value:15111},
            {'name':'Haiti', value:15505},
            {'name':'Afghanistan', value:19793},
            {'name':'Guinea', value:15490},
            {'name':'Palestine', value:15561},
            {'name':'Brunei', value:12003},
            {'name':'Mali', value:17332},
            {'name':'BurkinaFaso', value:17369},
            {'name':'Albania', value:14910},
            {'name':'Lebanon', value:63546},
            {'name':'Botswana', value:15782},
            {'name':'Mozambique', value:14029},
            {'name':'Armenia', value:12641},
            {'name':'Benin', value:15205},
            {'name':'Malta', value:14911},
            {'name':'EquatorialGuinea', value:10022},
            {'name':'Laos', value:19082},
            {'name':'Jamaica', value:13812},
            {'name':'NorthKorea', value:15847},
            {'name':'Mongolia', value:13137},
            {'name':'Nicaragua', value:12621},
            {'name':'Syria', value:15572},
            {'name':'Madagascar', value:13008},
            {'name':'Guyana', value:5471},
            {'name':'Niger', value:13741},
            {'name':'Congo', value:10100},
            {'name':'NorthMacedonia', value:12264},
            {'name':'Moldova', value:11914},
            {'name':'Chad', value:11154},
            {'name':'Bahamas', value:9908},
            {'name':'Namibia', value:10710},
            {'name':'Rwanda', value:10332},
            {'name':'Malawi', value:11762},
            {'name':'Mauritius', value:10921},
            {'name':'Mauritania', value:7916},
            {'name':'Tajikistan', value:7997},
            {'name':'Kyrgyzstan', value:7736},
            {'name':'NewCaledonia', value:9709},
            {'name':'Kosovo', value:7734},
            {'name':'Somalia', value:1873},
            {'name':'Togo', value:7146},
            {'name':'Bermuda', value:7719},
            {'name':'Liechtenstein', value:6872},
            {'name':'Monaco', value:6816},
            {'name':'CaymanIslands', value:6256},
            {'name':'Montenegro', value:4789},
            {'name':'Maldives', value:3743},
            {'name':'Guam', value:5844},
            {'name':'Barbados', value:4440},
            {'name':'FrenchPolynesia', value:5817},
            {'name':'Fiji', value:4494},
            {'name':'SouthSudan', value:15903},
            {'name':'Eswatini', value:3835},
            {'name':'SierraLeone', value:3787},
            {'name':'Liberia', value:2481},
            {'name':'Djibouti', value:3423},
            {'name':'Burundi', value:3399},
            {'name':'Aruba', value:2497},
            {'name':'Andorra', value:2864},
            {'name':'Greenland', value:3130},
            {'name':'Suriname', value:4120},
            {'name':'Bhutan', value:2483},
            {'name':'Belize', value:1586},
            {'name':'Lesotho', value:2273},
            {'name':'Curaçao', value:2596},
            {'name':'CentralAfricanRepublic', value:2323},
            {'name':'EastTimor', value:1902},
            {'name':'Eritrea', value:2084},
            {'name':'Gambia', value:1830},
            {'name':'CapeVerde', value:1704},
            {'name':'Seychelles', value:1059},
            {'name':'SaintLucia', value:1617},
            {'name':'Zanzibar', value:1724},
            {'name':'AntiguaandBarbuda', value:1370},
            {'name':'Guinea-Bissau', value:1315},
            {'name':'SanMarino', value:1555},
            {'name':'SolomonIslands', value:1546},
            {'name':'BritishVirginIslands', value:1492},
            {'name':'Comoros', value:1235},
            {'name':'Grenada', value:1043},
            {'name':'NorthernMarianaIslands', value:1182},
            {'name':'SaintKittsandNevis', value:927},
            {'name':', vanuatu', value:855},
            {'name':'SaintVincentandtheGrenadines', value:810},
            {'name':'TurksandCaicosIslands', value:925},
            {'name':'SintMaarten', value:857},
            {'name':'Samoa', value:772},
            {'name':'AmericanSamoa', value:709},
            {'name':'Dominica', value:507},
            {'name':'SãoToméandPríncipe', value:476},
            {'name':'Tonga', value:491},
            {'name':'Micronesia', value:403},
            {'name':'CookIslands', value:283},
            {'name':'MarshallIslands', value:244},
            {'name':'Anguilla', value:258},
            {'name':'Palau', value:264},
            {'name':'Kiribati', value:181},
            {'name':'Nauru', value:135},
            {'name':'Montserrat', value:68}
         ]
			var chart1Option = {
          title: {
              text: 'GDP OF EACH PROVINCE',//标题
              x: 'center',
              textStyle: {
                  fontSize: 23
              }
 
          },
          backgroundColor: '#fff', 
          tooltip: {
              show: true
          },
          series: [{
              name: 'GDP',
              type: 'wordCloud',
              sizeRange: [12, 64],
              rotationRange: [-45, 90],
              shape: 'pentagon',
              textPadding: 0,
              autoSize: {
                  enable: true,
                  minSize: 6
              },
              textStyle: {
                  normal: {
                      color: function() {
                          return 'rgb(' + [
                            Math.round(Math.random() * 200) + 50,
                            Math.round(Math.random() * 50),
                            Math.round(Math.random() * 50) + 50
                          ].join(',') + ')';
                      }
                  },
                  emphasis: {
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              data: data1,
          }]
      };
 
      var chart2Option = {
          title: {
              text: 'GDP OF EACH COUNTRY',
              x: 'center',
              textStyle: {
                  fontSize: 23
              }
 
          },
          backgroundColor: '#fff',
          tooltip: {
              show: true
          },
          series: [{
              name: 'GDP',
              type: 'wordCloud',
              sizeRange: [12, 64],
              rotationRange: [-45, 90],
              shape: 'pentagon',
              textPadding: 0,
              autoSize: {
                  enable: true,
                  minSize: 6
              },
              textStyle: {
                  normal: {
                      color: function() {
                          return 'rgb(' + [
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160)
                          ].join(',') + ')';
                      }
                  },
                  emphasis: {
                      shadowBlur: 10,
                      shadowColor: '#333'
                  }
              },
              data: data2,
          }]
      };
      chart1.setOption(chart1Option);
      chart2.setOption(chart2Option);
    },
  },
};
</script>

<style lang="less">
  .result{
    text-align: center; /*让div内部文字居中*/
      background-color: #fff;
      border-radius: 20px;
      width: 800px;
      height: 100%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
  }
</style>