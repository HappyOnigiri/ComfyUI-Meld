// @ts-ignore
import { api } from '../../../scripts/api.js';
(window as any).api = api;
import { MeldImage } from './types';

export const fetchImages = async (): Promise<MeldImage[]> => {
    const res = await api.fetchApi("/meld-nexus/list");
    if (!res.ok) {
        throw new Error(`Failed to fetch images: ${res.statusText}`);
    }
    return await res.json();
};

export const deleteImages = async (ids: number[], deleteFiles: boolean = true): Promise<void> => {
    const res = await api.fetchApi("/meld-nexus/bulk-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ids,
            delete_files: deleteFiles
        })
    });
    if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to delete images");
    }
};

export const registerImage = async (image: { filename: string; subfolder: string; type: string }): Promise<void> => {
    const res = await api.fetchApi("/meld-nexus/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(image)
    });
    if (!res.ok) {
        throw new Error("Failed to register image");
    }
};
