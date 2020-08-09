<template>
    <div class="index-item">
        <Header/>
        <Main_1/>
        <Main_2/>
        <Main_3/>
        <Main_4/>
        <Main_5/>
        <Main_6/>
        <Main_7/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Main_1 from '../components/Main_1'
    import Main_2 from '../components/Main_2'
    import Main_3 from '../components/Main_3'
    import Main_4 from '../components/Main_4'
    import Main_5 from '../components/Main_5'
    import Main_6 from '../components/Main_6'
    import Main_7 from '../components/Main_7'
    import Footer from '../components/Footer'

    export default {
        name: "Index",
        components:{
            Header,
            Main_1,
            Main_2,
            Main_3,
            Main_4,
            Main_5,
            Main_6,
            Main_7,
            Footer,
        }
    }
</script>

<style scoped>
.index-item{
    width: 100%;
}
</style>
