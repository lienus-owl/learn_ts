export class Mediator {
    private _mainPanelState = new MainPanelOnly();
    private _detailPanelState = new DetailPanel();
    private _sideNavState = new MainPanelWithSideNav();

    private _currentState: IState;
    private _detailPanelState: IState;
    private _mainPanelState: IMediatorImpl;

    constructor(mediatorImpl: IMediatorImpl) {
        this._mediatorImpl = mediatorImpl;
        this._currentState = this._currentMainPanelState = this._sideNavState;
    }

    
}

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


getStateImpl(stateType: StateType): IState {
    var stateImpl: IState;
    switch(StateType) {
        case StateType.DetailPanel: stateImpl = this._detailPanelState;
            break;
        case StateType.MainPanelOnly: stateImpl = this._mainPanelOnly;
            break;
        case StateType.MainPanelWithSideNav: stateImpl = this._sideNavState;
            break;
    }
    return stateImpl;
}