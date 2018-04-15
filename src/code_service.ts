'use strict';
import { existsSync } from 'fs';
import { exec } from 'child_process';

import { cwd } from './environment';

export function execute(command) {
  return new Promise(async (res, rej) => {
    const _command = (script) => {
      exec(`"${script}" ${command}`, (exc, out, err) => {
        if (exc) {
          rej(exc);
        } else {
          res(out || err);
        };
      });
    }

    const code = `${cwd}/code`;
    const insiders = `${cwd}/code-insiders`;

    switch (true) {
      case await existsSync(code):
        _command(code);
        break;
      case await existsSync(insiders):
        _command(insiders);
        break;
      default:
        rej(`VScode executable not found with ${code}`);
        break;
    }
  });
}