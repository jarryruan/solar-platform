    <template>
        <div>
            <h1>{{name}}</h1>
            <p v-for="text in list" :key="text">{{text}}</p>
        </div>
    </template>


    <script>
    export default {
        name: 'Demo',
        props: {
            name: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
               list: [
                   'Bob',
                   'Jack'
               ]
            }
        },
        methods: {
            onClick(){
                this.$emit('test', 123, 456);
            },
            onChange(text){
                this.text = text;
            }
        },
        
    }
    </script>



    <style scoped>
    p{
        margin: 1rem;
    }
    </style>
