import { createFlow } from "@builderbot/bot";
import FlowClass from "@builderbot/bot/dist/io/flowClass";
import { TFlow } from "@builderbot/bot/dist/types";

export class FlowAdapter {
    public static flows: FlowClass;
    static newFlow(args: TFlow[]) {
        this.flows = createFlow(args);
    }

    static getFlows() {
        return this.flows;
    }
}