<template>
    <div>
        <button @click="init">Initialize the app</button>
        <button @click="get">Get Data</button>
    </div>
</template>

<script>
    export default {
        name: "Initialize",

        methods: {
            init() {
                this.$store.dispatch('/users/seed');
                this.$store.dispatch('conversations/seed');
            },
            get() {
                //TODO
            }
        }
    }
</script>

<style scoped>
   div{
       display: flex;
       flex-direction: column;
       align-items: center;
   }
    button{
        width: 100%;
        max-width: 100px;
        margin: 10px;
        border: 2px slateblue solid;
        background: aliceblue;
        color: blueviolet;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-weight: bolder;
        font-size: 1em;
        padding: 5px;
    }


</style>
