import {LitElement, html} from '../web_modules/lit-element.js';
import '../web_modules/@vaadin/vaadin-grid/vaadin-grid.js';

class LitTableLifted extends LitElement {
    static get properties() {
        return {
            data: { type: Array }
        };
    }

    constructor() {
        super();
        this.data = [];
    }

    render() {
        return html`<style>
        :host {
            display: block;
            font-family: sans-serif;
            color: darkcyan;
        }
        </style>
        <div class="table">
            <vaadin-grid items='${this.data}'>
                <slot></slot>
            </vaadin-grid>
        </div>
        `;
    }

    firstUpdated() {
        (async () => {
            let response = await fetch('https://rickandmortyapi.com/api/character/');
            let data = await response.json();
            console.log(data.results);
            this.data = JSON.stringify(data.results);
        })();
    }
}

window.customElements.define('lit-table-lifted', LitTableLifted);
