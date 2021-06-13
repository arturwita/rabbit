interface BookController {
    collect: () => void;
    find: () => void;
    create: () => void;
    remove: () => void;
}

export const bookControllerFactory = (): BookController => {
    const collect = () => {}
    const find = () => {}
    const create = () => {}
    const remove = () => {}

    return {
        collect,
        find,
        create,
        remove
    }
}
