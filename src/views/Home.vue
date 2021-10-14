<template>
    <div id="body">
        <Header />
        <Main />
        <footer>

        </footer>
    </div>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'

export default {
    name: 'Home',
    components:{
        Header,
        Main
    }
}
</script>

<style>
    header, #body{
        background-color: blanchedalmond;
    }
</style>
