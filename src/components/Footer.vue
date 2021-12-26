<template>
    <div class="z-40 relative top-28 text-gray-600">
        <div class="mt-12 w-2/3 md:mb-12 md:w-full mx-auto">
            <div class="flex justify-center py-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2500">
                <button @click="donationClickM" class="w-1/2 md:w-1/6 bg-green-600 text-white py-5 rounded-full text-xl">Donate</button>
            </div>
        </div>
        <div class="flex flex-col md:w-full bg-green-600">
            <div class="mt-12 w-5/6 mx-auto py-2 md:grid grid-cols-3 gap-5 text-white py-8">
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
                        <a class="cursor-pointer" target="_blank" href="https://zaufanjinbafoundation.org:2096/"><i class="fas fa-envelope text-2xl"></i></a>
                    </div>
                    <div>
                        info@zaufanjinbafoundation.org <br>
                        Communications@zaufanjinbafoundation.org
                    </div>
                </div>
            </div>
            <div class="w-5/6 mx-auto text-center py-5 text-white py-8" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="2500">
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
            <div class="text-sm text-center text-dark bg-white py-8">
                Copyright &copy; 2021 Zaufanjinba Foundation |
                Designed by <a href="https://teampiccolo.com">Team Piccolo</a>
            </div>
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
            this.showModal = !this.showModal
        }
    }
}
</script>

<style>
</style>