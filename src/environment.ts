'use strict';
import { workspace } from 'vscode';

export const folder = '.vscode'
    , file = 'project-extensions.json'
    , path = `${workspace.rootPath}/${folder}`
    , uri = `${path}/${file}`
    , cwd = `${process.cwd()}/bin`;