<template>
    <div v-show="displayModal" id="modal">
        <div class="modal-content">
            <div class="modal-header text-xl text-center font-medium">
                <span @click="closeModal" class="close">&times;</span>
                Donation <br> 
                <i class="fas fa-donate text-3xl text-green-600"></i>
            </div>
            <div class="modal-body flex flex-col">
                <input v-model="name" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="name" placeholder="Name" id="name">    
                <input v-model="phone_number" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="phone_number" placeholder="Phone" id="phone_number">    
                <input v-model="email" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="email" placeholder="Email Address" id="email">    
                <input v-model="amount" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="amount" placeholder="Amount" id="amount"> 
                <button class="bg-green-600 text-white py-2 w-1/2 mx-auto rounded-xl" @click="pay">
                    Donate ₦{{amount}}
                </button>
            </div>
        </div> 
    </div>    
</template>

<script>
import {payWithPaystack} from '../../public/app'
export default {
    name: 'Modal',
    data(){
        return {
            displayModal: true,
            name: '',
            email: '',
            phone_number: '',
            amount: ''
        }
    },
    methods: {
        closeModal(){
            if(this.displayModal == true){
                this.displayModal = false
            }else{
                this.displayModal = true
            }
        },
        pay(){
            payWithPaystack(this.name,this.email,this.phone_number,this.amount)
        }
    }
    
}
</script>


<style scoped>
    #modal{
        background-color: rgba(0, 0, 0, 0.8);
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