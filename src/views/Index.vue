<template>
<span id="div" style="width: 200px;height: 200px;background-color: yellow;">ddd</span>
</template>

<script>
    import $ from 'jquery'
    import 'layui/dist/layui'

    export default {
        name: "Index",
        created:function(){
            $('#div').text('saasad');
        }
    }
</script>

<style scoped>
    @import '~layui/dist/layui.css';

</style>
