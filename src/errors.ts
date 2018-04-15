import { window } from 'vscode';

export default function erro(e: NodeJS.ErrnoException | string) {
    if (typeof e === 'string') {
      if (e.length > 0) window.showErrorMessage(e);
    } else {
      if (e.message) window.showErrorMessage(e.message);
    }
    return e != undefined && e != null;
}