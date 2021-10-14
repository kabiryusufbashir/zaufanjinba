<template>
    <div id="body">
        <Header />
        <main class="my-4 relative top-48 text-gray-600">
            <section id="banner" class="w-full">
                <img class="mx-auto w-5/6 rounded-3xl" src="../assets/banner.jpg" alt="banner image">
            </section>
            <section id="intro" class="my-4 w-2/3 mx-auto">
                <p class="my-2">
                    The Zaufanjinba Foundation is a non-profit and non-political organization, established in 2015
                </p>
                <p class="my-2">
                    Zaufanjinba foundation has touched the lives of many people within and outside Borno state through community services and youth empowerment.
                </p>
                <p class="my-2">
                    With the destruction of livelihoods brought about by the insurgency, resulting in communities displaced, the foundation currently maintains three IDP camps with a total population of about 200 persons catering for all their needs, which include food, shelter, healthcare, and education for the children
                </p>
            </section>
            <section id="founder" class="py-6 bg-white shadow-lg">
                <Heading heading="Foundation Founder" />
                <div class="mb-4 w-2/3 mx-auto md:grid grid-cols-2 gap-3">
                    <div class="py-4 my-auto md:mx-0.5">
                        <img class="rounded-3xl md:w-2/3 mx-auto" src="../assets/founder.png" alt="Graduation image 001">
                    </div>
                    <div class="my-auto">
                        <p class="">
                            A seasoned Banker and a political administrator. Adamu Alhaji Lawan has a long career in the Banking industry and now serves as Borno State's Commissioner of Finance, Budget, and Economic Planning. With the ardent desire to serve society, Adamu Alhaji Lawan has delved into politics. You can interact with him on this website and follow his modest contribution to good governance in Borno. Adamu Alhaji Lawan was born in Jere Local Government Area of Borno State on 3rd June 1970. He attended Maimusari Primary School between 1976 and 1982, Government Secondary School New Marte from 1982 to 1988 where he wrote his SSCE and proceeded to University of Maiduguri in 1988. He Graduated with First Class in Agricultural Economics in 1995.
                        </p>
                        <p class=" my-2">
                            Adamu Alhaji Lawan started his career as a lecturer and Departmental Examinations Officer at Kashim Ibrahim College of Education Maiduguri between December 1996 and October 1999. He then Proceeded to All States Trust Bank to start his banking career as Credit and Marketing Officer from October 1999 to August 2001
                        </p>
                        <p class=" my-2">
                            He transferred to the prestigious Zenith Bank in the Same month, taking the same position (Credit and Marketing Officer) which, he held till he was a Branch Manager of Damaturu branch of the bank in April 2005, a position he held until June 2009 when he was promoted to the rank of Head Public Sector Group for Borno and Yobe States. He was promoted to Branch Head of the Maiduguri Branch of Zenith Bank in October 2010, and he held that position until he was appointed by the Kashim Shettima Government in September 2015 to serve as Honourable Commissioner of Works and Transport, Commissioner for Local Government and Emirate Affairs. In August 2019, his Excellency, Engr. Prof. Babagana Umara Zulum mni, appointed him as Commissioner of Finance, Budget and Economic Planning and he still serves as such
                        </p>
                    </div>
                </div>
            </section>
            <section id="aims">
                <div class="py-16 w-5/6 mx-auto">
                    <Heading heading="Aims &amp; Objectives" />
                    <p>
                        To improve the quality of life for those group of people that are in greatest of need or those people that are disadvantaged and vulnerable.
                        To enhance the health and wellbeing of vulnerable people with local communities through education and treatment
                        Looking for and creating innovative solutions to support and provide care services to the less fortunate and vulnerable groups
                    </p>
                </div>
            </section>
            <section id="empowerment" class="bg-white">
                <div class="w-5/6 mx-auto py-8">
                    <Heading heading="Youth Empowerment" />
                    <div class="md:grid grid-cols-2 gap-3">
                        <div class="py-4">
                            <img class="rounded-2xl w-4/5 mx-auto" src="../assets/beneficiary_001.jpg" alt="Graduation image 001">
                        </div>
                        <div class="my-auto">
                            <p class="">
                                Zaufanjinba foundation has sponsored students to study within and outside the country. Some of the students the foundation has sponsored are now Accountants, Engineers, Medical doctors, and pilots working in numerous places
                            </p>
                        </div>
                    </div>
                    <div class="md:grid grid-cols-2 gap-3">
                        <div class="py-4">
                            <img class="rounded-2xl w-4/5 mx-auto" src="../assets/beneficiary_002.jpg" alt="Graduation image 001">
                        </div>
                        <div class="my-auto">
                            <p class="">
                                Zaufanjinba foundation has trained over 1500 youths on different ICT training between 2020 and 2021
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    name: 'Home',
    components:{
        Header
    }
}
</script>

<style>
    header, #body{
        background-color: blanchedalmond;
    }
</style>
