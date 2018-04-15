'use strict';
import { writeFile } from 'fs';

import { showSync } from './show_sync';
import { uri } from './environment';
import erro from './errors';

export async function write_sync(text) {
  writeFile(uri, text,
    { encoding: 'UTF-8' },
    (e) => {
        if(erro(e)) return;
        showSync(uri);
    }
  );
}