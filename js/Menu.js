var Menu;
(function (Menu) {
    Menu.Toggle = function () {
        if (document.body.classList.contains("menu-open"))
            document.body.classList.remove("menu-open");
        else
            document.body.classList.add("menu-open");
    };
    Menu.To = function (id) {
        Scroller.To(id);
        Menu.Toggle();
    };
})(Menu || (Menu = {}));
