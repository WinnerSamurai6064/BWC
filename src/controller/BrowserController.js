import {
    browser,
    setTabs,
    setActiveTab,
    setLoading,
    setAddress
} from '../stores/browser.js';

const TAB_SLEEP_TIMEOUT = 10 * 60 * 1000;

class BrowserController {

    constructor() {

        this.tabs = [];

        this.activeTab = null;

        this.sleepTimers = new Map();

    }

    createTab(tab) {

        this.tabs.push({

            id: tab.id,

            title: tab.title || 'New Tab',

            url: tab.url || '',

            thumbnail: null,

            state: 'active',

            lastActive: Date.now()

        });

        this.activeTab = tab.id;

        this.sync();

    }

    switchTab(id) {

        this.activeTab = id;

        this.tabs.forEach(tab => {

            if(tab.id === id){

                tab.state = 'active';

                tab.lastActive = Date.now();

                this.clearSleepTimer(tab.id);

            }else{

                this.scheduleSleep(tab);

            }

        });

        this.sync();

    }

    scheduleSleep(tab){

        this.clearSleepTimer(tab.id);

        const timer = setTimeout(()=>{

            tab.state = 'sleeping';

            this.sync();

            // Chromium suspend call goes here later.

        }, TAB_SLEEP_TIMEOUT);

        this.sleepTimers.set(tab.id, timer);

    }

    clearSleepTimer(id){

        const timer = this.sleepTimers.get(id);

        if(timer){

            clearTimeout(timer);

            this.sleepTimers.delete(id);

        }

    }

    closeTab(id){

        this.clearSleepTimer(id);

        this.tabs = this.tabs.filter(tab=>tab.id!==id);

        if(this.activeTab===id){

            this.activeTab=this.tabs.length
                ? this.tabs[0].id
                : null;
        }

        this.sync();

    }

    navigate(url){

        setLoading(true);

        setAddress(url);

        // Chromium navigation arrives later.

    }

    sync(){

        setTabs([...this.tabs]);

        setActiveTab(this.activeTab);

    }

}

export default new BrowserController();
