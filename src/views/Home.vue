<template>
    <div id="body">
        <Header />
        <Main />
        <Footer />
        <div id="modal">
            <div class="modal-content">
                <div class="modal-header text-xl text-center font-medium">
                    <span class="close">&times;</span>
                    Donation <br> 
                    <i class="fas fa-donate text-3xl text-green-600"></i>
                </div>
                <div class="modal-body flex flex-col">
                    <input class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="name" placeholder="Name" id="name">    
                    <input class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="phone" placeholder="Phone" id="phone">    
                    <input class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="amount" placeholder="Amount" id="phone"> 
                    <button class="bg-green-600 text-white py-2 w-1/2 mx-auto rounded-xl">Donate</button>   
                </div>
            </div> 
        </div>  
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

<style scoped>
    #modal{
        background-color: rgba(0, 0, 0, 0.7);
        position: fixed;
        z-index: 60;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    .modal-content{
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    .close{
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover, .close:focus{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
</style>