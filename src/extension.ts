'use strict';
import { commands, ExtensionContext } from 'vscode';
import sync_down from './sync_down';
import sync_up from './sync_up';

export function activate(context: ExtensionContext) {
    console.log('Sync started');

    const sync_up_command = commands.registerCommand(
        'extension.sync_up', sync_up);

    const sync_down_command = commands.registerCommand(
        'extension.sync_down', sync_down);

    context.subscriptions.push(
        sync_down_command,
        sync_up_command
    );
}

export function deactivate() {
    console.log('Sync end');
}