import { writable } from 'svelte/store';

export const browser = writable({

    mode: 'browse',

    loading: false,

    activeTab: null,

    tabs: [],

    wallpaper: null,

    theme: null,

    address: '',

    pageTitle: 'New Tab',

    pageUrl: '',

    canGoBack: false,

    canGoForward: false

});

export function setMode(mode){

    browser.update(state=>({

        ...state,

        mode

    }));

}

export function setLoading(value){

    browser.update(state=>({

        ...state,

        loading:value

    }));

}

export function setAddress(address){

    browser.update(state=>({

        ...state,

        address

    }));

}

export function setActiveTab(id){

    browser.update(state=>({

        ...state,

        activeTab:id

    }));

}

export function setTabs(tabs){

    browser.update(state=>({

        ...state,

        tabs

    }));

}
