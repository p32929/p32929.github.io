export interface IDirectMessageItem {
    name: string
    link: string
}

export interface IListItem {
    title: string,
    desc?: string,
    logo: string,
    link?: string,
}

export interface ITitledListItem {
    text: string,
    arr: Array<IListItem>
    shouldNotSort?: boolean
}

export interface IInitialInformation {
    name: string
    occupation: string
}

// 
export interface IRoutedSection {
    name: string;
    items: ITitledListItem[];
}

export interface ICombinedInformation {
    initialInformation: IInitialInformation,
    directMessageItems: IDirectMessageItem[],
    routes: IRoutedSection[],
}