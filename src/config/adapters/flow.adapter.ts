import { createFlow } from "@builderbot/bot";
import { TFlow } from "@builderbot/bot/dist/types";

export class FlowAdapter {
    static newFlow(args: TFlow[]) {
        return createFlow(args);
    }
}