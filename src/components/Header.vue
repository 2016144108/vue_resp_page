<template>
    <div class="header">
        <div class="header_top" id="header_top">
            <div class="inner" id="inner">
                <h1 class="logo">
                    <a href="" id="all" @click.prevent="on">电脉云</a>
                </h1>
                <div class="nav">
                    <ul>
                        <li><a class="a" href="">热门专业</a></li>
                        <li><a class="a" href="">专业技能</a></li>
                        <li><a class="a" href="">教学模式</a></li>
                        <li><a class="a" href="">课程设计</a></li>
                        <li><a class="a" href="">师资力量</a></li>
                        <li><a class="a" href="">学员作品</a></li>
                        <li><a class="a" href="">明星学员</a></li>
                        <li><a class="a" href="">公司简介</a></li>
                    </ul>
                </div>
                <a href="" class="content" id="content">
                    <img src="../assets/java.jpg" alt="">
                </a>
                <div class="menu">
                    <div></div>
                </div>
            </div>
        </div>
        <div id="banner" class="banner">
            <img src="../assets/391da32cf42e41509738afd72224a582.jpg" alt="">
        </div>
    </div>
</template>

<script type="module">
    import $ from 'jquery'
    export default {
        name: "Header",
        methods:{
            on(){
                    alert($('#all').text());
            }
        }
    }
</script>

<style scoped>
    @import "../css/index.css";
</style>
