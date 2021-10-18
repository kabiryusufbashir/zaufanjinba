<template>
    <div id="body">
        <Header />
        <Main />
        <Footer />
        
    </div>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default {
    name: 'Home',
    components:{
        Header,
        Main,
        Footer
    }
}
</script>
