import {LitElement, html} from '../web_modules/lit-element.js';
import '../web_modules/@vaadin/vaadin-grid/vaadin-grid.js';

class LitTable extends LitElement {
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
            <vaadin-grid items="${this.data}">
                <vaadin-grid-column path="name" header="Full Name"></vaadin-grid-column>
                <vaadin-grid-column path="status" header="Status"></vaadin-grid-column>
                <vaadin-grid-column path="origin.name" header="Origin"></vaadin-grid-column>
                <vaadin-grid-column path="location.name" header="Current Location"></vaadin-grid-column>
            </vaadin-grid>
        </div>
        `;
    }

    firstUpdated() {
        (async () => {
            let response = await fetch('https://rickandmortyapi.com/api/character/');
            let data = await response.json();
            this.data = JSON.stringify(data.results);
        })();
    }
}

window.customElements.define('lit-table', LitTable);
