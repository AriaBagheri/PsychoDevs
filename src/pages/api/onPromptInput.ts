// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {Configuration, OpenAIApi} from "openai";

type Data = {
    action: string,
    result: any
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const decider = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Decide if the following prompt is asking to draw something or to code something or other. You can output: 'other', 'image', 'code'"
            },
            {role: "user", content: req.body.prompt},
        ],
    });
    const choice = decider.data.choices[0].message.content;
    if (choice == "image") {
        const genImageResponse = await openai.createImage({
            prompt: req.body.prompt,
            n: 6,
            size: "1024x1024",
        });
        return res.status(200).json({
            action: "draw",
            result: genImageResponse.data.data
        });
    } else {
        if (choice == 'code') {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "The following prompt is going to ask you to write HTML code. Use inline everything. Do not write any explanation. Just output the HTML code. If there is need for JS use the script tag. If there is need for css, use inline styling on the components."
                    },
                    {role: "user", content: req.body.prompt},
                ],
            });
            return res.status(200).json({
                action: choice,
                result: completion.data.choices[0].message.content
            })
        } else {
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "user", content: req.body.prompt},
                ],
            });
            const responseBeforeProcessing = completion.data.choices[0].message.content;
            if (responseBeforeProcessing.toUpperCase().includes("As an AI language model".toUpperCase())){
                return handler(req, res);
            }
            return res.status(200).json({
                action: choice,
                result: responseBeforeProcessing
            })
        }

    }


    // const results = JSON.parse(completion.data.choices[0].message.content);


    // const resp = await openai.createImage({
    //     prompt: req.body.prompt,
    //     n: 2,
    //     size: "1024x1024",
    // });
    // res.status(200).json({response: resp.data})
}
