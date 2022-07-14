import { nanoid, extension } from "../mod.ts";

/** Saves a blob to file and assigns a random identifier */
export async function saveBlobData(data: Uint8Array, contentType: string): Promise<string> {
    const identifier = nanoid();
    const fileExtension = extension(contentType);
    if(fileExtension === undefined) {
        throw new Error("invalid content type");
    }
    await Deno.writeFile(`./data/blob/${identifier}.${fileExtension}`, data);
    return `${identifier}.${fileExtension}`;
}

export async function loadBlobData(identifier: string): Uint8Array {
    return await Deno.readFile(`./data/blob/${identifier}`);
}