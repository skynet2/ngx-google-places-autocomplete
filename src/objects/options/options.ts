import { Viewport } from "../viewport";
import { ComponentRestrictions } from "./componentRestrictions";

export class Options {
    public bounds: Viewport;
    public componentRestrictions: ComponentRestrictions;
    public types: string[];

    public constructor(opt?: Partial<Options>) {
        if (!opt)
            return;

        Object.assign(this, opt);
    }
}