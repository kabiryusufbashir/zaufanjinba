<template>
    <div v-show="displayModal" id="modal">
        <div class="modal-content">
            <div class="modal-header text-xl text-center font-medium">
                <span @click="closeModal" class="close">&times;</span>
                Donation <br> 
                <i class="fas fa-donate text-3xl text-green-600"></i>
            </div>
            <div class="modal-body flex flex-col">
                <input v-model="paymentData.customer.name" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="name" placeholder="Name" id="name">    
                <input v-model="paymentData.customer.phone_number" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="phone_number" placeholder="Phone" id="phone_number">    
                <input v-model="paymentData.customer.email" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="email" placeholder="Email Address" id="email">    
                <input v-model="paymentData.amount" class="border border-gray-600 my-2 p-2 rounded-lg" type="text" name="amount" placeholder="Amount" id="amount"> 
                <button class="bg-green-600 text-white py-2 w-1/2 mx-auto rounded-xl" @click="asyncPay">
                    Donate ₦{{paymentData.amount}}
                </button>
            </div>
        </div> 
    </div>    
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return {
            displayModal: true,
            paymentData: {
                tx_ref: this.generateReference(),
                amount: '',
                currency: 'NGN',
                payment_options: 'card,ussd',
                redirect_url: '/',
                customer: {
                name: '',
                email: '',
                phone_number: ''
                },
                customizations: {
                    title: 'Zaufanjinba Foundation',
                    description: 'Support the foundation with your donation!',
                    logo: 'https://www.zaufanjinba.org/images/foundation.jpg'
                },
                onclose: this.closedPaymentModal
            }
        }
    },
    methods: {
        asyncPay() {
            if(this.name !== ''){
                if(this.phone_number !== ''){
                    if(this.email !== ''){
                        if(this.amount !== ''){
                            this.asyncPayWithFlutterwave(this.paymentData).then(
                                (response) => {
                                    console.log(response)
                                }
                            )
                        }else{
                            alert('Amount field empty')
                        }
                    }else{
                        alert('Email Address field empty')
                    }
                }else{
                    alert('Phone No field empty')
                }
            }else{
                alert('Name field empty')
            }
        },
        closedPaymentModal() {
            console.log('payment is closed');
        },
        generateReference(){
            let date = new Date()
            return date.getTime().toString();
        },
        closeModal(){
            if(this.displayModal == true){
                this.displayModal = false
            }else{
                this.displayModal = true
            }
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