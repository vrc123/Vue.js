/*Vue.js opgave 1*/
const drumset = Vue.createApp({
    data(){
        return {
            name: "",
            buttons: [
                {
                    sound: new Audio("sounds/tom-1.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/tom1.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/tom-2.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/tom2.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/tom-3.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/tom3.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/tom-4.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/tom4.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/snare.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/snare.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/crash.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/crash.png" alt="Trommebillede"></img>'
                },
                {
                    sound: new Audio("sounds/kick-bass.mp3"),
                    class: "drum",
                    image: '<img width=100 height=100 src="images/kick.png" alt="Trommebillede"></img>'
                }
            ]
        }        
    },
    methods: {
        sound(index){
            this.buttons[index].sound.play()
        }
    }
}
)

drumset.mount('#vue_1')

/*Vue.js opgave 2*/
const form = Vue.createApp({
    data(){
        return {
            name: null,
            email: null,
            password: null,
            passwordrepeat: null,
            phone: null,
            address: null,
            zipcode: null,
            errors: []
        }        
    },
    methods: {
        submit() {
            if(this.name && this.email && this.password && this.passwordrepeat && this.phone && this.address && this.zipcode){
                return true
            }

            this.errors = []
            
            if(!this.name){
                this.errors.push("Skriv dit navn!")
            }
            if(!this.email){
                this.errors.push("Skriv din email!")
            }
            if(!this.password){
                this.errors.push("Skriv dit password!")
            }
            if(!this.passwordrepeat){
                this.errors.push("Gentag dit password!")
            }
            if(!this.phone){
                this.errors.push("Skriv dit telefonnummer!")
            }
            if(!this.address){
                this.errors.push("Skriv din adresse!")
            }
            if(!this.zipcode){
                this.errors.push("Skriv dit postnummer!")
            }
        }
    }
}
)

form.mount('#vue_2')