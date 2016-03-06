module Scroller {
    
    var _GetTop = (elt): number => {
        var _y = 0;
        while (elt && !isNaN(elt.offsetTop)) {
            _y += elt.offsetTop;
            elt = elt.offsetParent;
        }
        return _y;
    }
    
    var _GetCurrentYPosition = () => {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
    
    export var To = (id: string) => {
        var startY = _GetCurrentYPosition();
        var stopY = _GetTop(document.getElementById(id));
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        console.log(startY, stopY);
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        return false;
    }
}