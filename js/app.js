const pokeapi = 
'https://pokeapi.co/api/v2/pokemon/'
const {createApp} = Vue

const app = Vue.createApp({
    data() {
        return {
            /*saludo: 'lalo',
            cuenta: 0,
            visible: true,
            nombre:'',
            password: '',
            validacion_letrasMayusculas_visible: true,*/
            data_pokemon: {},
            id_pokemon: '',
        }
    },
    methods: {
        async buscarPokemon() {
            try {
                const pokemonTofind = await fetch(pokeapi+this.id_pokemon)
                const pokemon = await pokemonTofind.json()
                this.data_pokemon = pokemon
                console.log(pokemon)
                return pokemon
            } catch (error) {
                alert('el pokemon no fue econtrado')
            }
        }
        // aumentarVariable(){
        //     this.cuenta++
        // },
        // disminuirVariable(){
        //     this.cuenta--
        // },
        // cambiarDiv(){
        //     this.visible = !this.visible
        // },
        // enviarDatos(){
        //     alert('El nombre es: ' + this.nombre)
        // },
        // verificarPassword(){
        //     var letras_mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
        //     for(i = 0; i < this.password; i++ ){
        //         if(letras_mayusculas.indexOf(this.password.charAt(i), 0) != -1){

        //              this.validacion_letrasMayusculas_visible = false

        //         }
        //         else{
        //               this.validacion_letrasMayusculas_visible = true
        //         }
        //     }

        // }
    }
});

app.mount('#app')