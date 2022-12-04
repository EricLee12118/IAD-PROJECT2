<template>
    <body>
        <div id='app'>
            <div class="flex items-center">
                <span class="text-large font-600 mr-3"><h2>Currency Exchange Calculator</h2></span>
            </div>
            <div id='fd-1'>
                Currency held:
                <el-select id='fd-1-s' v-model="select1" @change="count" >
                    <el-option v-for="c in countryList" :key="c.id" :value="c.id" :label="c.name">
                    </el-option>
                </el-select>
            </div>
            <div id='fd-2'>
                Target currency:
                <el-select id='fd-2-s' v-model="select2" @change="count">
                    <el-option v-for="c in countryList" :key="c.id" :value="c.id" :label="c.name">
                    </el-option>
                </el-select>
            </div>
            <div id='fd-3'>
                Exchange amount:
                <el-input id='fd-3-i' type="text" v-model="v"/>
                <el-button id='fd-3-b' type="button" @click="count">Query Calculation</el-button>
            </div>
            <hr id='fd-x'>
            <div id='fd-4'>
                <div id=fd-4-1 >
                    <p>{{v}} {{s1}} = {{result}}{{s2}}</p>
                </div>
                <div id=fd-4-d>
                    <p>Current exchange rate: {{r}}</p>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            select1:'1',
            select2:'3',
            s1:'CNY',
            s2:'EUR',
            sn1:'RMB',
            sn2:'EUR',
            v:'',
            result:'',
            r:'',
            key:'',
            countryList:[
                { id: '1', key: 'CNY', name: 'CNY'},
                { id: '2', key: 'USD', name: 'USD' },
                { id: '3', key: 'EUR', name: 'EUR' },
                { id: '4', key: 'GBP', name: 'GBP' },
                { id: '5', key: 'JPY', name: 'JPY' },
                { id: '6', key: 'HKD', name: 'HKD' },
                { id: '7', key: 'AUD', name: 'AUD' },
                { id: '8', key: 'CAD', name: 'CAD' },
            ],
            rates: new Map([
                ["CNY", 1],
                ["USD", 0.1503],
                ["EUR", 0.1266],
                ["GBP", 0.1144],
                ["JPY", 15.7243],
                ["HKD", 1.1646],
                ["AUD", 0.2115],
                ["CAD", 0.198],
            ]),
            data:[],
        }
    },

    methods: {
        count(){
            this.s1=this.countryList[this.select1-1].key
            this.s2=this.countryList[this.select2-1].key
            this.sn1=this.countryList[this.select1-1].name.substring(6)
            this.sn2=this.countryList[this.select2-1].name.substring(6)
            this.r=this.rates.get(this.s2)/this.rates.get(this.s1)
            this.result=(this.v*this.r).toFixed(2)
        },
        getInfo() {
            const url = 'https://www.mxnzp.com/api/exchange_rate/configs?app_id=nmwqjmmkljvmumqm&app_secret=TEtoQm9pZWtIb0piWEJoUW1tMnZlUT09'
            axios.get(url).then(res => {
                if(res.status==200){
                    console.log(res.data.data)
                    var data = res.data.data
                    return data
                }
                }).catch(err => {
                    console.log(err)
            })
        },
    },
    mounted(){
        this.data = this.getInfo();
    }
}
</script>

<style>
*{
    margin: 0%;
    padding: 0%;
}

#app{
    height: 420px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

body{
   background-color: cadetblue; 
}
</style>