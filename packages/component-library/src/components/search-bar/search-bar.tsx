import { Component, ComponentInterface, Host, h, State, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'poc-search-bar',
    styleUrl: 'search-bar.css',
    shadow: true
})
export class SearchBar implements ComponentInterface {
    @Event() search: EventEmitter<string>
    @State() query: string

    onSearchInputChange = (e: UIEvent) => {
        const target = e.target as HTMLInputElement
        this.search.emit(target.value)
    }

    render() {
        return (
            <Host>
                <input onChange={this.onSearchInputChange} placeholder="Github username" />
                {this.query && <slot></slot>}
            </Host>
        )
    }
}
