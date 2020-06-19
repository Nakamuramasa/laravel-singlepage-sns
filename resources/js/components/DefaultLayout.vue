<template>
    <div>
        <navbar></navbar>
        <card></card>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Card from './articles/card'
export default{
    components: {
        Navbar,
        Card
    }
}
</script>
