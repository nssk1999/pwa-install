import { LitElement } from 'lit-element';
import 'infinite-carousel-wc/dist/esm/infinite-carousel-wc.min.js';
export declare class pwainstall extends LitElement {
    deferredprompt: any;
    manifestpath: string;
    iconpath: string;
    manifestdata: any;
    openmodal: boolean;
    showopen: boolean;
    showEligible: boolean;
    isSupportingBrowser: boolean;
    isIOS: boolean;
    installed: boolean;
    explainer: string;
    featuresheader: string;
    descriptionheader: string;
    installbuttontext: string;
    cancelbuttontext: string;
    iosinstallinfotext: string;
    static get styles(): import("lit-element").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    checkManifest(manifestData: any): void;
    getManifestData(): Promise<any>;
    updateButtonColor(data: any): void;
    openPrompt(): void;
    shouldShowInstall(): boolean;
    install(): Promise<boolean>;
    cancel(): void;
    render(): import("lit-element").TemplateResult;
}
