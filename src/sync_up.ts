'use strict';
import { existsSync, mkdirSync } from 'fs';
import { extensions } from 'vscode';

import { create_sync } from './create_sync';
import { write_sync } from './write_sync';
import { path } from './environment';
import erro from './errors';
import { window } from 'vscode';

export default async () => {
  
  const sync_up = async () => {
    const sync = create_sync(extensions.all);
    await write_sync(sync);
    window.showInformationMessage('Sync up with sucess');
  };

  if(existsSync(path)){
    await sync_up();
  } else {
    await mkdirSync(path);
    await sync_up();
  }  
};