<template>
    <div id="body">
        <Header />
        <Main />
        <Footer />
        <Modal />          
    </div>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default {
    name: 'Home',
    components:{
        Header,
        Main,
        Footer,
        Modal
    }
}
</script>