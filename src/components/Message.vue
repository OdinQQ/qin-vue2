<template>
  <div class="box">
    <div class="tabs">
        <div class="tab-item" @click="navTo(0)" :class="{
            'tab-active': active === 0
        }">代付款</div>
        <div class="tab-item" @click="navTo(1)" :class="{
            'tab-active': active === 1
        }">待发货</div>
        <div class="tab-item" @click="navTo(2)" :class="{
            'tab-active': active === 2
        }">待收货</div>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    data () {
     return {
        routes: [
            '/message/tab1',
            '/message/tab2',
            '/message/tab3'
        ],
        active: 0
     }
    },
    methods: {
        navTo(index) {
            this.active = index;
            const path = this.routes[index];
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
.box {
  border: 1px solid seagreen;  
}
    .tabs{
        display: flex;
        width: 100%;
        height: 40px;
        background: gray;
        font-size: 0;
    }
    .tab-item {
        font-size: 16px;
        flex-grow: 1;
        height: 40px;
        line-height: 40px;
    }

    .tab-active {
        background-color: goldenrod;
    }
    .content {
        height: 200px;
    }
</style>
