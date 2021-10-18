<template>
    <header class="fixed -top-3 z-50 w-full shadow-sm bg-green-600">
        <img class="w-28 mx-auto pt-4" src="../assets/logo.png" alt="Foundation Logo">
        <Heading style="color:#fff;" heading="Zaufanjinba Foundation" />
    </header>
</template>

<script>
import Heading from './Heading'
export default {
    name: 'Header',
    components: {
        Heading
    }
}
</script>