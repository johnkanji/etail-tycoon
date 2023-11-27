import { sum } from 'lodash'
import { useGlobalState } from "./state"

export const computeWeeklySales = () => {
    const state = useGlobalState()
    
    const weeklySales = state.value.products.map(p => {
        return Math.floor(1000 * (0.6 + (Math.random() * 0.8)) * Math.pow(p.demand,2) * (1/p.unitPrice))
    })

    return weeklySales
}

export const nextWeek = () => {
    const state = useGlobalState()
    
    const weeklySales = state.value.products.map(p => {
        return Math.floor(1000 * (0.6 + (Math.random() * 0.8)) * Math.pow(p.demand,2) * (1/p.unitPrice))
    })

    // const weeklyExecPayroll = sum(state.value.employees.executives.map(e => e.salary))
    const weeklyWorkerPayroll = state.value.employees.workers.map(w => w.num_employed * 40 * w.wage)
}