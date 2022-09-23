//All the "view" classes will inherit this class
export default class{
    constructor(){

    }

    setTitle(title){ //Update the title in the tab
        document.title = title;
    }

    async getHtml(){
        return "";
    }
}