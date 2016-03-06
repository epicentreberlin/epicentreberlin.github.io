module Menu {
    export var Toggle = () => {
        if(document.body.classList.contains("menu-open"))
            document.body.classList.remove("menu-open");
        else
            document.body.classList.add("menu-open");
    }
    
    export var To = (id: string) => {
        Scroller.To(id);
        Toggle();
    }
}