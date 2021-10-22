<template>
    <div class="z-40 relative top-28 text-gray-600 flex flex-col md:w-full">
        <div class="mt-12 w-2/3 md:mb-12 md:w-1/4 mx-auto">
            <div class="flex justify-center" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500">
                <button @click="donationClickM" class="w-1/2 bg-green-600 py-3 text-white rounded-full text-xl">Donate</button>
            </div>
        </div>
        <div class="w-5/6 mx-auto pb-2 md:grid grid-cols-3 gap-5">
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500">
                <div>
                    <i class="fas fa-phone text-2xl"></i>
                </div>
                <div>
                    +(234) 814 7738 777, <br>+(234) 912 541 2336
                </div>
            </div>
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                <div>
                    <i class="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                    No 13 New GRA Along Bama Road, Maiduguri, Borno State Nigeria
                </div>
            </div>
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2500">
                <div>
                    <i class="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                    info@zaufanjinbafoundation.org <br>
                    Communications@zaufanjinbafoundation.org
                </div>
            </div>
        </div>
        <div class="w-5/6 mx-auto flex justify-evenly py-5">
            <div>
                <i class="fab fa-facebook text-3xl"></i>
            </div>
            <div>
                <i class="fab fa-twitter text-3xl"></i>
            </div>
            <div>
                <i class="fab fa-linkedin text-3xl"></i>
            </div>
        </div>
        <div class="text-sm text-center text-white bg-green-600 py-5">
            Copyright &copy; 2021 Zaufanjinba Foundation |
            Designed by <a href="https://teampiccolo.com">Team Piccolo</a>
        </div>
    </div>
    <Modal v-show="showModal" /> 
</template>

<script>
import Modal from '../components/Modal'
export default {
    name: 'Footer',
    components: {
        Modal
    },
    data(){
        return{
            showModal: false
        }
    },
    methods:{
        donationClickM(){
            if(this.showModal == false){
                this.showModal = true
            }else{
                this.showModal = false
            }
        }
    }
}
</script>

<style>
</style>