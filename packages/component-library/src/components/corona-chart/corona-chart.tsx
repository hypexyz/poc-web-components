import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'corona-chart',
  styleUrl: 'corona-chart.css',
  shadow: true,
})
export class CoronaChart implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
