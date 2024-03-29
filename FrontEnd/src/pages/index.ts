import {Router} from "@vaadin/router"
import {state} from "../state"

class Home extends HTMLElement{
    connectedCallback(){
        this.render()
        const form = this.querySelector(".form")
        form?.addEventListener("submit",(e)=>{
            e.preventDefault()
            const target = e.target as any
            console.log(target.nombre.value)
            state.setState(target.nombre.value)
            Router.go("/chat")
        })
    }
    render(){
        this.innerHTML = `
            <form class="form">
            <div>
                <label>Tu nombre</label>
            </div>
            <input type="text" name="nombre">
            <button>Comenzar</button>
            </form>
        `

    }
}

customElements.define("home-page",Home)