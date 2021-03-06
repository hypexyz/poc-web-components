/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PocGithubCard {
        "avatar": string;
        "followersCount": number;
        "gistsCount": number;
        "name": string;
        "repoCount": number;
        "username": string;
    }
    interface PocSearchBar {
    }
    interface PocSimpleChart {
        "data": any;
    }
    interface PocUsersList {
    }
}
declare global {
    interface HTMLPocGithubCardElement extends Components.PocGithubCard, HTMLStencilElement {
    }
    var HTMLPocGithubCardElement: {
        prototype: HTMLPocGithubCardElement;
        new (): HTMLPocGithubCardElement;
    };
    interface HTMLPocSearchBarElement extends Components.PocSearchBar, HTMLStencilElement {
    }
    var HTMLPocSearchBarElement: {
        prototype: HTMLPocSearchBarElement;
        new (): HTMLPocSearchBarElement;
    };
    interface HTMLPocSimpleChartElement extends Components.PocSimpleChart, HTMLStencilElement {
    }
    var HTMLPocSimpleChartElement: {
        prototype: HTMLPocSimpleChartElement;
        new (): HTMLPocSimpleChartElement;
    };
    interface HTMLPocUsersListElement extends Components.PocUsersList, HTMLStencilElement {
    }
    var HTMLPocUsersListElement: {
        prototype: HTMLPocUsersListElement;
        new (): HTMLPocUsersListElement;
    };
    interface HTMLElementTagNameMap {
        "poc-github-card": HTMLPocGithubCardElement;
        "poc-search-bar": HTMLPocSearchBarElement;
        "poc-simple-chart": HTMLPocSimpleChartElement;
        "poc-users-list": HTMLPocUsersListElement;
    }
}
declare namespace LocalJSX {
    interface PocGithubCard {
        "avatar"?: string;
        "followersCount"?: number;
        "gistsCount"?: number;
        "name"?: string;
        "repoCount"?: number;
        "username"?: string;
    }
    interface PocSearchBar {
        "onSearch"?: (event: CustomEvent<string>) => void;
    }
    interface PocSimpleChart {
        "data"?: any;
    }
    interface PocUsersList {
    }
    interface IntrinsicElements {
        "poc-github-card": PocGithubCard;
        "poc-search-bar": PocSearchBar;
        "poc-simple-chart": PocSimpleChart;
        "poc-users-list": PocUsersList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "poc-github-card": LocalJSX.PocGithubCard & JSXBase.HTMLAttributes<HTMLPocGithubCardElement>;
            "poc-search-bar": LocalJSX.PocSearchBar & JSXBase.HTMLAttributes<HTMLPocSearchBarElement>;
            "poc-simple-chart": LocalJSX.PocSimpleChart & JSXBase.HTMLAttributes<HTMLPocSimpleChartElement>;
            "poc-users-list": LocalJSX.PocUsersList & JSXBase.HTMLAttributes<HTMLPocUsersListElement>;
        }
    }
}
