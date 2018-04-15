'use strict';
import { readFileSync, existsSync } from 'fs';

import { create_sync } from './create_sync';
import { uri, cwd } from './environment';
import { execute } from './code_service';
import erro from './errors';

export default async () => {
  const file = await readFileSync(uri, { encoding: 'UTF-8' });
  const { lastUp, _extensions } = JSON.parse(file);

  for (const k in _extensions) {
    if (_extensions.hasOwnProperty(k)) {
      execute(`--install-extension ${k}`)
        .catch(e => {
          erro(e);
        });
    }
  }

  create_sync(_extensions, { up: lastUp });
};