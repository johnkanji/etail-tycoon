import { createGlobalState, useStorage } from "@vueuse/core";
import { merge } from 'lodash'

const initialState = {
    cash: 1000000,
    stock_price: 100,
    customer_satisfaction: 3,
    quarter: 1,
    week: 1,
    
    player: {
        name: "",
        portrait: ""
    },

    tutorial: {
        enabled: true,
        step: 0,
        advanceTutorial: function() {
            this.step++;
        },
        previousTutorial: function() {
            if (this.step > 0) {
                this.step--;
            }
        }
    },

    products: [],

    employees: {
        executives: [],
        workers: [{
            title: 'Warehouse Packer',
            num_employed: 0,
            wage: 6.5,
            satisfaction: null
        }, {
            title: 'Delivery Driver',
            num_employed: 0,
            wage: 7.50,
            satisfaction: null
        }, {
            title: 'Customer Service Agent',
            num_employed: 0,
            wage: 12,
            satisfaction: null
        }, {
            title: 'Social Media Manager',
            num_employed: 0,
            wage: 25,
            satisfaction: null
        }, {
            title: 'Server Engineer',
            num_employed: 0,
            wage: 35,
            satisfaction: null
        }, {
            title: 'Web Developer',
            num_employed: 0,
            wage: 35,
            satisfaction: null
        }]
    },

    facilities: {
        'warehouses': [],
        'call_centres': [],
        'data_centres': [],
        'offices': []
    }
}

export const useGlobalState = createGlobalState(
    () => useStorage(
        'etail-tycoon-store', 
        initialState, 
        localStorage, 
        { mergeDefaults: (storageValue, defaults) => merge(defaults, storageValue) })
)

export function clearLocalStorage() {
    localStorage.clear()
}

export function logLocalStorage() {
    console.log(localStorage)
}