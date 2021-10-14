<template>
        <h1 class="text-center font-medium text-3xl mb-4 text-gray-600">{{heading}}</h1>
</template>

<script>
export default {
    name: 'Heading',
    props:{
        heading: String
    }
}
</script>