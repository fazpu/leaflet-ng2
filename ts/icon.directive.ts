import {
    Directive,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {
    Icon,
    LeafletEvent,
    Point,
} from 'leaflet';
import { TRANSPARENT_PIXEL } from './consts';

/**
 * Angular2 directive for Leaflet icons.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-marker>
 *         <yaga-icon
 *             [iconAnchor]="..."
 *             [iconSize]="..."
 *             [popupAnchor]="..."
 *             [className]="..."
 *             [iconUrl]="..."
 *             [iconRetinaUrl]="..."
 *             [iconSize]="..."
 *             [iconAnchor]="..."
 *             [popupAnchor]="..."
 *             [tooltipAnchor]="..."
 *             [shadowUrl]="..."
 *             [shadowRetinaUrl]="..."
 *             [shadowSize]="..."
 *             [shadowAnchor]="...">
 *         </yaga-icon>
 *     </yaga-marker>
 * </yaga-map>
 * ```
 *
 * @link http://leafletjs.com/reference-1.2.0.html#icon Original Leaflet documentation
 * @link https://leaflet-ng2.yagajs.org/latest/browser-test?grep=Icon%20Directive Unit-Test
 * @link https://leaflet-ng2.yagajs.org/latest/coverage/lcov-report/lib/icon.directive.js.html Test coverage
 * @link https://leaflet-ng2.yagajs.org/latest/typedoc/classes/icondirective.html API documentation
 * @example https://leaflet-ng2.yagajs.org/latest/examples/icon-directive/
 */
@Directive({
    selector: 'yaga-icon',
})
export class IconDirective extends Icon  {
    /**
     * This is an EventEmitter used to notify on any change in this object. It is mainly created to provide reactions
     * of the marker directive on changes.
     */
    @Output('update') public updateEvent: EventEmitter<LeafletEvent> = new EventEmitter();

    constructor() {
        super({
            iconUrl: TRANSPARENT_PIXEL,
        });
    }

    /**
     * Input for the DOM class name.
     * Use it with `<yaga-icon [className]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-classname Original Leaflet documentation
     */
    @Input() public set className(val: string) {
        this.options.className = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get className(): string {
        return this.options.className;
    }
    /**
     * Input for the icon-url.
     * Use it with `<yaga-icon [iconUrl]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconurl Original Leaflet documentation
     */
    @Input() public set iconUrl(val: string) {
        this.options.iconUrl = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconUrl(): string {
        return this.options.iconUrl;
    }
    /**
     * Input for the icon-retina-url.
     * Use it with `<yaga-icon [iconRetinaUrl]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconretinaurl Original Leaflet documentation
     */
    @Input() public set iconRetinaUrl(val: string) {
        this.options.iconRetinaUrl = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconRetinaUrl(): string {
        return this.options.iconRetinaUrl;
    }
    /**
     * Input for the icon-size.
     * Use it with `<yaga-icon [iconSize]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconsize Original Leaflet documentation
     */
    @Input() public set iconSize(val: Point) {
        this.options.iconSize = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconSize(): Point {
        return (this.options.iconSize as Point);
    }
    /**
     * Input for the icon-anchor.
     * Use it with `<yaga-icon [iconAnchor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconanchor Original Leaflet documentation
     */
    @Input() public set iconAnchor(val: Point) {
        this.options.iconAnchor = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconAnchor(): Point {
        return (this.options.iconAnchor as Point);
    }

    /**
     * Input for the popup-anchor.
     * Use it with `<yaga-icon [popupAnchor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-popupanchor Original Leaflet documentation
     */
    @Input() public set popupAnchor(val: Point) {
        this.options.popupAnchor = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get popupAnchor(): Point {
        return (this.options.popupAnchor as Point);
    }
    // We have to wait for adding the definition for tooltipAnchor
    // see: https://github.com/yagajs/leaflet-ng2/issues/220#issuecomment-307634276
    //
    // @Input() public set tooltipAnchor(val: Point) {
    //     this.options.tooltipAnchor = val;
    //     this.updateEvent.emit({
    //         target: this,
    //         type: 'update',
    //     });
    // }
    // public get tooltipAnchor(): Point {
    //     return (<Point> this.options.popupAnchor);
    // }
    /**
     * Input for the shadow-url.
     * Use it with `<yaga-icon [shadowUrl]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-shadowurl Original Leaflet documentation
     */
    @Input() public set shadowUrl(val: string) {
        this.options.shadowUrl = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get shadowUrl(): string {
        return this.options.shadowUrl;
    }
    /**
     * Input for the shadow-url for retina displays.
     * Use it with `<yaga-icon [shadowUrl]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-shadowretinaurl Original Leaflet documentation
     */
    @Input() public set shadowRetinaUrl(val: string) {
        this.options.shadowRetinaUrl = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get shadowRetinaUrl(): string {
        return this.options.shadowRetinaUrl;
    }
    /**
     * Input for the shadow-size.
     * Use it with `<yaga-icon [shadowSize]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-shadowsize Original Leaflet documentation
     */
    @Input() public set shadowSize(val: Point) {
        this.options.shadowSize = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get shadowSize(): Point {
        return (this.options.shadowSize as Point);
    }
    /**
     * Input for the shadow-anchor.
     * Use it with `<yaga-icon [shadowAnchor]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-shadowanchor Original Leaflet documentation
     */
    @Input() public set shadowAnchor(val: Point) {
        this.options.shadowAnchor = val;
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get shadowAnchor(): Point {
        return (this.options.shadowAnchor as Point);
    }
}
