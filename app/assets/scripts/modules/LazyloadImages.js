import $ from 'jquery';
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', function(){
            Waypoint.refreshAll();
        });    
    }
}

export default StickyHeader;