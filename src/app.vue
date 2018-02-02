<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import tab from "./js/tab.js"
export default {
    name: "tab",
    data() {
        return {
            msg: "666"
        }
    },
    mounted() {
        this.go();
    },
    methods: {
        go() {
            let tab = new Tab()
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.tab {
    width: 350px;
    height: 350px;
    border: 1px solid #ccc;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

ol {
    width: 350px;
    height: 50px;
    background: #eee;
    display: flex;
}

ol li {
    flex: 1;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
}

ul li {
    display: none;
    width: 350px;
    height: 300px;
    background: pink;
    text-align: center;
    line-height: 60px;
    font-size: 50px;
    color: #fff;
}

ul li:first-child {
    display: block;
}

.active {
    background: skyblue;
    color: #fff;
}
</style>