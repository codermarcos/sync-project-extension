'use strict';
import { workspace, window } from 'vscode';

export async function showSync(uri: string) {
    const document = await workspace.openTextDocument(uri);
    const show = await window.showTextDocument(document);
}