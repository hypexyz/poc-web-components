import { Component, Host, h, Prop, Element } from '@stencil/core'

import Chart from 'chart.js'

const chartData = {
    type: 'pie',
    data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
            {
                label: 'Population (millions)',
                backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
                data: [2478, 5267, 734, 784, 433]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
}

@Component({
    tag: 'poc-simple-chart',
    styleUrl: 'simple-chart.css',
    shadow: true
})
export class SimpleChart {
    @Prop() data: any

    @Element() el: HTMLElement
    canvas!: HTMLCanvasElement

    componentDidLoad(): void {
        new Chart(this.canvas, chartData)
    }

    render() {
        return (
            <Host>
                <div
                    class="chart-container"
                    style={{ position: 'relative', height: '65vh', width: '50%' }}>
                    <canvas
                        ref={el => (this.canvas = el as HTMLCanvasElement)}
                        id="pie-chart"
                        width="800"
                        height="450"></canvas>
                </div>
            </Host>
        )
    }
}
