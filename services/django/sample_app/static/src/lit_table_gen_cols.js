import {LitElement, html} from '../web_modules/lit-element.js';
import '../web_modules/@vaadin/vaadin-grid/vaadin-grid.js';

class LitTableGenCols extends LitElement {
    static get properties() {
        return {
            data: { type: Array },
            url: { type: String }
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
            <vaadin-grid items='${this.data}' rows-draggable>
                <slot></slot>
            </vaadin-grid>
        </div>
        `;
    }

    // firstUpdated() {
    //     (async () => {
    //         let response = await fetch(this.url);
    //         let data = await response.json();
    //         console.log(data.results);
    //         this.data = JSON.stringify(data.results);
    //     })();
    // }
}

window.customElements.define('lit-table-gen-cols', LitTableGenCols);
