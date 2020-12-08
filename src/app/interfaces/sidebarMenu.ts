export interface Menu {
    icon: string,
    title: string,
    submenu: [
        { title: string, url: string },
        { title: string, url: string },
        { title: string, url: string },
    ]
}