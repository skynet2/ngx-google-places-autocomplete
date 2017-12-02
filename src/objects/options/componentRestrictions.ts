export class ComponentRestrictions {
    public country: string;

    constructor(obj?: Partial<ComponentRestrictions>) {
        if (!obj)
            return;

        Object.assign(this, obj);
    }
}