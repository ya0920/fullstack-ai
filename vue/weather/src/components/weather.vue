<template>
    <div>
        <div class="head">
            <div class="city-name">
                <i class="iconfont icon-dingwei"></i>
                {{ state.city }}
            </div>
            <div class="city-change">
                <i class="iconfont icon-city"></i>
                切换城市
            </div>
        </div>
        <div class="main">
            <div class="weather-info">
                <p class="temp">{{ state.weather.temperature }}°</p>
                <p class="info">{{ state.weather.weather }}</p>
                <div class="detail">
                    <div class="item">
                        <i class="iconfont icon-shuidi"></i>
                        <span>湿度</span>
                        <span>{{ state.weather.humidity }}%</span>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-feng"></i>
                        <span>风向</span>
                        <span>{{ state.weather.windDirection }}风</span>
                    </div>
                    <div class="item">
                        <i class="iconfont icon-fengli"></i>
                        <span>风力</span>
                        <span>{{ state.weather.windPower }}级</span>
                    </div>
                </div>
            </div>
            <div class="future-info">
                <p>三日天气预报</p>
                <div class="container">
                    <div class="future-weather" v-if="state.future.length > 1">
                        <p>周{{ convertToChinese(state.future[1].week) }}</p>
                        <i :class="getWeatherIcon(state.future[1].dayWeather)"></i>
                        <div class="future-temperature">
                            <div class="high">{{ state.future[1].dayTemp}}</div>
                            <div class="low">&nbsp;/ {{ state.future[1].nightTemp}}℃</div>
                        </div>
                    </div>
                    <div class="future-weather" v-if="state.future.length > 2">
                        <p>周{{ convertToChinese(state.future[2].week) }}</p>
                        <i :class="getWeatherIcon(state.future[2].dayWeather)"></i>
                        <div class="future-temperature">
                            <div class="high">{{ state.future[2].dayTemp}}</div>
                            <div class="low">&nbsp;/ {{ state.future[2].nightTemp}}℃</div>
                        </div>
                    </div>
                    <div class="future-weather" v-if="state.future.length > 3">
                        <p>周{{ convertToChinese(state.future[3].week) }}</p>
                        <i :class="getWeatherIcon(state.future[3].dayWeather)"></i>
                        <div class="future-temperature">
                            <div class="high">{{ state.future[3].dayTemp}}</div>
                            <div class="low">&nbsp;/ {{ state.future[3].nightTemp}}℃</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import { onMounted, reactive } from 'vue';

const state = reactive({
    city: '北京市',
    temp: '10℃',
    weather: {},
    future: [],
})

onMounted(() => {
    window._AMapSecurityConfig = {
        securityJsCode: "acaa73ea716ffd0e982bf788992ce582",
    };
    AMapLoader.load({
        key: "1273e61b40774e6bc0692fbe39d48c53", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
        .then((AMap) => {
            //获取定位
            getLocalCity(AMap)
        })
});

const getLocalCity = (AMap) => {
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                console.log(result.city);
                state.city = result.city
                getWeather(AMap)
            }
        })
    })
}
const getWeather = (AMap) => {// 获取天气
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive(state.city, function (err, data) {
            console.log(err, data);
            //err 正确时返回 null
            //data 返回实时天气数据，返回数据见下表
            state.weather = data
            getFuture(AMap)
        });
    });
}
const getFuture = (AMap) => {// 获取未来三天天气
    //加载天气查询插件
    AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        var weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getForecast(state.city, function (err, data) {
            console.log(err, data);
            //err 正确时返回 null
            //data 返回天气预报数据，返回数据见下表
            state.future = data.forecasts
        });
    });
}

const convertToChinese = (num) => {
    const chineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '天'];
    return chineseNumbers[num];
};

const getWeatherIcon = (weather) => {
      const weatherIcons = {
        '多云': 'icon-duoyun',
        '晴': 'icon-qing',
        '小雨': 'icon-baoyu',
        '中雨': 'icon-baoyu',
        '大雨': 'icon-baoyu',
        '雷阵雨': 'icon-leiyu',
        '雾': 'icon-ziyuan',
      };
      return `iconfont ${weatherIcons[weather] || 'icon-default'}`;
}

</script>

<style lang="css" scoped>
.head {
    height: 53px;
    background: #8E6FF7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    padding: 0 15px;
}

.city-name {
    font-size: 18px;
}

.city-change {
    font-size: 14px;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

.main {
    padding: 7px 16px 20px 16px;
}

.weather-info {
    width: 100%;
    background: linear-gradient(146deg, rgba(142, 111, 247, 0.1) 0%, rgba(142, 111, 247, 0.05) 100%), rgba(0, 0, 0, 0);
    border-radius: 16px;
    padding: 24px;
    box-sizing: border-box;
}

.temp {
    font-family: Roboto, Roboto;
    font-weight: 300;
    font-size: 60px;
    color: #000000;
    line-height: 60px;
    text-align: center;
}

.info {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #4B5563;
    line-height: 21px;
    text-align: center;
}

.detail {
    display: flex;
    margin-top: 24px;
}

.item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item i {
    color: #8E6FF7;
}

.item span:nth-child(2) {
    font-size: 14px;
    color: #4B5563;
}

.item span:nth-child(3) {
    font-size: 16px;
    color: #000000;
}

.future-info {
    margin-top: 24px;
}

.future-info p {
    font-family: Roboto, Roboto;
    font-weight: 500;
    font-size: 18px;
    color: #000000;
    line-height: 28px;
    text-align: left;
}

.container {
    display: flex;
    margin-top: 16px;
    overflow-x: auto;
    width: 100%;
}

.future-weather {
    flex: 0 0 120px;
    flex-direction: column;
    margin-right: 16px;
    padding: 17px;
    width: 120px;
    box-sizing: border-box;
    background: #FFFFFF rgba(0, 0, 0, 0.001);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    border: 1px solid #F3F4F6;
}

.future-weather:nth-child(1) {
    margin-right: 16px;
}

.future-weather:nth-child(2) {
    margin-right: 16px;
}

.future-weather p {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #4B5563;
    line-height: 20px;
    text-align: left;
}

.future-weather i {
    font-size: 64px;
    margin: 8px 11px;
    display: block;
    text-align: center;
}

.future-temperature {
    display: flex;
    align-items: baseline;
    justify-content: center;
}

.high {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 24px;
    text-align: center;
}

.low {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #9CA3AF;
    line-height: 20px;
    text-align: center;
}
</style>