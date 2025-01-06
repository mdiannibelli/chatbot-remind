import { utils } from "@builderbot/bot";
import { AddKeyword } from "~/domain/use-cases/keywords/AddKeyword";

const keyword = new AddKeyword();

export const discordFlow = keyword.createKeyword({
    keyword: 'doc',
    answers: [
        {
            message: ['You can see the documentation here', '📄 https://builderbot.app/docs \n', 'Do you want to continue? *yes*'].join('\n'),
            options: { capture: true },
            callback: async (ctx, { gotoFlow, flowDynamic }) => {
                if (ctx.body.toLocaleLowerCase().includes('yes')) {
                    return gotoFlow(registerFlow);
                }
                await flowDynamic('Thanks!');
            }
        }
    ]
});

export const welcomeFlow = keyword.createKeyword({
    keyword: ['hi', 'hello', 'hola'],
    answers: [
        { message: '🙌 Hello welcome to this *Chatbot*' },
        {
            message: [
                'I share with you the following links of interest about the project',
                '👉 *doc* to view the documentation'
            ].join('\n'),
            options: { delay: 800, capture: true },
            callback: async (ctx, { fallBack }) => {
                if (!ctx.body.toLocaleLowerCase().includes('doc')) {
                    return fallBack('You should type *doc*');
                }
            },
            nestedFlows: [discordFlow]
        }
    ]
});

export const registerFlow = keyword.createKeyword({
    keyword: utils.setEvent('REGISTER_FLOW'),
    answers: [
        {
            message: 'What is your name?',
            options: { capture: true },
            callback: async (ctx, { state }) => {
                await state.update({ name: ctx.body });
            }
        },
        {
            message: 'What is your age?',
            options: { capture: true },
            callback: async (ctx, { state }) => {
                await state.update({ age: ctx.body });
            }
        }
    ],
    action: {
        callback: async (_, { flowDynamic, state }) => {
            await flowDynamic(`${state.get('name')}, thanks for your information!: Your age: ${state.get('age')}`);
        }
    }
});