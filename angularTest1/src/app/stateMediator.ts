import { toUnicode } from "punycode";

export enum StateType {
    MainPanelOnly,
    MainPanelWithSideNav,
    DetailPanel
}

export enum PanelType {
    Primary,
    Detail
}

export interface IState {
    getPanelType(): PanelType;
    getStateType(): StateType;
    isStateNavVisible(): boolean;
    getPanelButtonClass(): string;
}

export class MainPanelOnly implements IState {
    getPanelType(): PanelType {
        return PanelType.Primary;
    }
    getStateType(): StateType {
        return StateType.MainPanelOnly;
    }
    getPanelButtonClass(): string {
        return 'fa-chevron-right';
    }
    isStateNavVisible(): boolean {
        return false;
    }
}

export class MainPanelWithSideNav implements IState {
    getPanelType(): PanelType {
        return PanelType.Primary;
    }
    getStateType(): StateType{
        return StateType.DetailPanel;
    }
    getPanelButtonClass(): string{
        return 'fa-chevron-left';
    }
    isStateNavVisible(): boolean {
        return true;
    }
}

export class DetailPanel implements IState {
    getPanelType(): PanelType {
        return PanelType.Detail;
    }
    getStateType(): StateType {
        return StateType.DetailPanel;
    }
    getPanelButtonClass(): string{
        return '';
    }
    isStateNavVisible(): boolean {
        return false;
    }
}

export interfase IMediatorImpl {
    showNavPanel();
    hideNavPanel();
    showDetailPanel();
    hideDetailPanel();
    changeShowHideSiteButton(fromClass: string, toClass: string);
}

